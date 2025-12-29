import React, { useEffect, useState, useContext } from 'react';
import * as S from './AthleteDashboard.styles.js';
import { AuthContext } from '../../auth/AuthContext.js';
import { format, subDays, isAfter } from 'date-fns';
const BASE_URL = import.meta.env.VITE_REACT_APP_API_URL;

export default function AthleteDashboard({ userId: propUserId, compact=false }){
  const { user } = useContext(AuthContext);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const targetUserId = propUserId || user?.id || user?._id;

  useEffect(() => {
    async function load(){
      if(!targetUserId) return setLoading(false);
      setLoading(true);
      try{
        const url = propUserId ? `${BASE_URL}/api/trainings/user/${propUserId}` : `${BASE_URL}/api/trainings/get`;
        const res = await fetch(url, { credentials: 'include' });
        if(!res.ok) throw new Error('Error fetching trainings');
        const json = await res.json();
        const trainings = json.registros || json.registrosUsuario || [];
        setData(trainings);
      }catch(err){
        console.error(err);
      }finally{ setLoading(false); }
    }
    load();
  }, [propUserId, targetUserId]);

  if(loading) return <div>Cargando dashboard...</div>;

  // filter last 7 days
  const since = subDays(new Date(), 6);
  const recent = data.filter(t => {
    const d = t.fecha ? new Date(t.fecha) : null;
    return d && isAfter(d, subDays(new Date(), 7)) || (d && d >= since);
  });

  const totals = {
    totalDuration: 0,
    totalCasst: 0,
    avgRpe: 0,
    count: recent.length,
    avgSueno: 0,
    avgSuenoCal: 0,
    avgDolor: 0,
    avgEstres: 0,
    avgAnimo: 0,
    avgMotivacion: 0,
    avgAlimentacion: 0,
    avgHidratacion: 0,
    cumplimientoRate: 0
  };

  recent.forEach((t, i) => {
    totals.totalDuration += Number(t.duracion || 0);
    totals.totalCasst += Number(t.casstAu || (t.duracion && t.rpe ? t.duracion * t.rpe : 0));
    totals.avgRpe += Number(t.rpe || 0);
    totals.avgSueno += Number(t.suenoHoras || 0);
    totals.avgSuenoCal += Number(t.suenoCalidad || 0);
    totals.avgDolor += Number(t.dolorMuscular || 0);
    totals.avgEstres += Number(t.estres || 0);
    totals.avgAnimo += Number(t.animo || 0);
    totals.avgMotivacion += Number(t.motivacion || 0);
    totals.avgAlimentacion += Number(t.calidadAlimentacion || 0);
    totals.avgHidratacion += Number(t.hidratacion || 0);
    if(t.cumplimientoObjetivo) totals.cumplimientoRate += 1;
  });

  if(totals.count > 0){
    totals.avgRpe = (totals.avgRpe / totals.count).toFixed(1);
    totals.avgSueno = (totals.avgSueno / totals.count).toFixed(1);
    totals.avgSuenoCal = (totals.avgSuenoCal / totals.count).toFixed(1);
    totals.avgDolor = (totals.avgDolor / totals.count).toFixed(1);
    totals.avgEstres = (totals.avgEstres / totals.count).toFixed(1);
    totals.avgAnimo = (totals.avgAnimo / totals.count).toFixed(1);
    totals.avgMotivacion = (totals.avgMotivacion / totals.count).toFixed(1);
    totals.avgAlimentacion = (totals.avgAlimentacion / totals.count).toFixed(1);
    totals.avgHidratacion = (totals.avgHidratacion / totals.count).toFixed(1);
    totals.cumplimientoRate = Math.round((totals.cumplimientoRate / totals.count) * 100);
  }

  if(compact){
    return (
      <S.CompactRoot>
        <S.Header>
          <S.CompactTitle>Resumen semanal · {recent.length} regs</S.CompactTitle>
        </S.Header>
        <S.CompactGrid>
          <S.CompactCard>
            <S.CompactMetric>{totals.totalDuration} min</S.CompactMetric>
            <S.Label>Dur. total</S.Label>
          </S.CompactCard>
          <S.CompactCard>
            <S.CompactMetric>{totals.totalCasst}</S.CompactMetric>
            <S.Label>CASST AU</S.Label>
          </S.CompactCard>
          <S.CompactCard>
            <S.CompactMetric>{totals.avgRpe}</S.CompactMetric>
            <S.Label>RPE</S.Label>
          </S.CompactCard>
        </S.CompactGrid>
      </S.CompactRoot>
    )
  }

  return (
    <S.Root>
      <S.Header>
        <S.Title>Resumen semanal ({recent.length} registros)</S.Title>
        <div>{targetUserId ? null : `Semana hasta ${format(new Date(), 'dd/MM')}`}</div>
      </S.Header>
      <S.Grid>
        <S.Card>
          <S.Metric>{totals.totalDuration} min</S.Metric>
          <S.Label>Duración total</S.Label>
        </S.Card>
        <S.Card>
          <S.Metric>{totals.totalCasst}</S.Metric>
          <S.Label>CASST AU total</S.Label>
        </S.Card>
        <S.Card>
          <S.Metric>{totals.avgRpe}</S.Metric>
          <S.Label>RPE promedio</S.Label>
        </S.Card>
        <S.Card>
          <S.Metric>{totals.avgSueno} h</S.Metric>
          <S.Label>Sueño promedio</S.Label>
        </S.Card>
        <S.Card>
          <S.Metric>{totals.avgDolor}</S.Metric>
          <S.Label>Dolor muscular</S.Label>
        </S.Card>
        <S.Card>
          <S.Metric>{totals.cumplimientoRate}%</S.Metric>
          <S.Label>Cumplimiento objetivo</S.Label>
        </S.Card>
      </S.Grid>
    </S.Root>
  )
}
