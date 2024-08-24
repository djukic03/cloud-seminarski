export class Workout {
    username: string
    date: string
    workoutData: [
        {
            exercise: string,
            reps: number,
            set: number,
            weight: number
        }
    ]

    constructor(username: string, date: string, workoutData: [{ exercise: string, reps: number, set: number, weight: number }]) {
        this.username = username
        this.date = date
        this.workoutData = workoutData
    }
}