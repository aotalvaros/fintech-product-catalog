'use client';

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from 'recharts';
import { RiskData } from '@/utils/generateRiskData';

interface Props {
  readonly data: RiskData[];
}

export default function RiskChart({ data }: Props) {
  return (
    <div className="w-full h-64">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="year" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="risk" fill="#2563EB" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}