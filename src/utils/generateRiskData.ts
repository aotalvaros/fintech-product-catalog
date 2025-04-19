export interface RiskData {
    year: string;
    risk: number;
}
function seededRandom(id: string, offset: number): number {
    let hash = 0;
    for (let i = 0; i < id.length; i++) {
        hash = id.charCodeAt(i) + ((hash << 5) - hash);
    }
    const seed = Math.abs((hash + offset * 99991) % 1000);
    return 10 + (seed % 60); // entre 10 y 70
}

export const generateRiskData = (id: string): RiskData[] => {
    const baseYear = 2020;
    return Array.from({ length: 5 }, (_, i) => ({
        year: (baseYear + i).toString(),
        risk: seededRandom(id, i),
    }));
};