export interface IMetric {
  title: string;
  value: number;
  priorPeriod: number;
  priorPeriodDelta: number;
}

export class Metric implements IMetric {
  constructor(
    public title: string = "",
    public value: number = 0,
    public priorPeriod: number = 0,
    public priorPeriodDelta: number = 0
  ) {}
}
