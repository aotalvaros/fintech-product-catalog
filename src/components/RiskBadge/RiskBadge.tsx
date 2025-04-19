"use client";

import styled from "styled-components";

interface Props {
  readonly level: "Bajo" | "Medio" | "Alto" | string;
}

function getBackgroundColor(level: Props["level"]): string {
  if (level === "Bajo") return "#27af59";
  if (level === "Medio") return "#d1ad1d";
  return "#ef4444";
}

const Badge = styled.span<{ $level: Props["level"] }>`
  padding: 0.25rem 0.5rem;
  font-size: 0.75rem;
  font-weight: 600;
  border-radius: 9999px;
  color: white;
  background-color: ${({ $level }) => getBackgroundColor($level)};
`;

export default function RiskBadge({ level }: Props) {
  return <Badge $level={level}>Riesgo: {level}</Badge>;
}
