const Training = require("../models/model.trainings");

exports.createRegister = async (req, res, next) => {
  try {
    const userId = req.user.id;
    const trainingData = req.body;

    // Ensure fecha is date and calculate casstAu if not provided
    if (trainingData.fecha) {
      trainingData.fecha = new Date(trainingData.fecha);
    }
    if (!trainingData.casstAu && trainingData.duracion && trainingData.rpe) {
      trainingData.casstAu =
        Number(trainingData.duracion) * Number(trainingData.rpe);
    }

    const newTraining = new Training({
      ...trainingData,
      user: userId,
    });

    const savedTraining = await newTraining.save();

    res.status(201).json({
      message: "Entrenamiento registrado correctamente",
      training: savedTraining,
    });
  } catch (err) {
    const error = {
      message: "Error al registrar entrenamiento: " + err.message,
      status: 500,
    };
    next(error);
  }
};

exports.getRegisters = async (req, res, next) => {
  try {
    const userId = req.user.id;
    const trainings = await Training.find({ user: userId }).sort({ fecha: -1 });

    res.status(200).json({
      registros: trainings,
    });
  } catch (err) {
    const error = {
      message: "Error al obtener registros: " + err.message,
      status: 500,
    };
    next(error);
  }
};

exports.getRegistersByUser = async (req, res, next) => {
  try {
    const requester = req.user;
    const { userId } = req.params;

    if (
      requester.id !== userId &&
      requester.role !== "coach" &&
      requester.role !== "admin"
    ) {
      return res
        .status(403)
        .json({
          error: "No autorizado para ver los registros de este usuario",
        });
    }

    const trainings = await Training.find({ user: userId }).sort({ fecha: -1 });

    res.status(200).json({ registros: trainings });
  } catch (err) {
    const error = {
      message: "Error al obtener registros del usuario: " + err.message,
      status: 500,
    };
    next(error);
  }
};

// Obtener todos los registros (solo coaches y admins)
exports.getAllRegisters = async (req, res, next) => {
  try {
    const requester = req.user;
    if (
      !requester ||
      (requester.role !== "coach" && requester.role !== "admin")
    ) {
      return res.status(403).json({ error: "No autorizado" });
    }

    const trainings = await Training.find()
      .populate("user")
      .sort({ fecha: -1 });

    res.status(200).json({ registros: trainings });
  } catch (err) {
    const error = {
      message: "Error al obtener todos los registros: " + err.message,
      status: 500,
    };
    next(error);
  }
};

exports.deleteRegister = async (req, res, next) => {
  try {
    const { id } = req.params;
    const userId = req.user.id;
    const userRole = req.user.role;

    const training = await Training.findById(id);

    if (!training) {
      return res.status(404).json({ message: "Entrenamiento no encontrado" });
    }

    // Verificar si el usuario es el propietario del entrenamiento o si es coach/admin
    if (
      training.user.toString() !== userId &&
      userRole !== "coach" &&
      userRole !== "admin"
    ) {
      return res
        .status(403)
        .json({ message: "No autorizado para eliminar este entrenamiento" });
    }

    await Training.findByIdAndDelete(id);
    res.status(200).json({ message: "Entrenamiento eliminado correctamente" });
  } catch (err) {
    const error = {
      message: "Error al eliminar el entrenamiento: " + err.message,
      status: 500,
    };
    next(error);
  }
};
