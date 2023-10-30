export interface IRunnerStat {
  name: string;
  distanceCovered: number;
  averagePace: number;
}

export class RunnerStat implements IRunnerStat {
  constructor(
    public name: string = "",
    public distanceCovered: number = 0,
    public averagePace: number = 0
  ) {}
}
