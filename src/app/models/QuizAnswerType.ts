export enum QuestionType{
    SINGLE,
    QCM,
    WRITTEN
}
export const QuestionTypeMapToString: { [key:number]:string} = {
    0:"SINGLE",
    1:"QCM",
    2:"WRITTEN",
}
export const QuestionTypeMapToEnum: { [key:number]:QuestionType} = {
    0:QuestionType.SINGLE,
    1:QuestionType.QCM,
    2:QuestionType.WRITTEN,
}
