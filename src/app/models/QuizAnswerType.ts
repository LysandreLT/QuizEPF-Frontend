export enum QuestionType{
    SINGLECHOICE,
    QCM,
    WRITTENANSWER
}
export const QuestionTypeMapToString: { [key:number]:string} = {
    0:"SINGLECHOICE",
    1:"QCM",
    2:"WRITTENANSWER",
}
export const QuestionTypeMapToEnum: { [key:number]:QuestionType} = {
    0:QuestionType.SINGLECHOICE,
    1:QuestionType.QCM,
    2:QuestionType.WRITTENANSWER,
}
