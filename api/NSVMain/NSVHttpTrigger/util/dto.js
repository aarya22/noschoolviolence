class Case
{
    constructor(id, createdDate, createdPersonId, subjectId)
    {
        this.id = id
        this.createdDate = createdDate
        this.createdPerson = createdPersonId
        this.subjectId = subjectId
    }
}
class Concern
{
}
class Insight
{
}
module.exports =
{
    Case    : Case,
    Concern : Concern,
    Insight : Insight 
}