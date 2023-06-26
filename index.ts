import type { PersonPrivate, PersonPublic } from './client';
import { DefaultService, OpenAPI } from './client';

OpenAPI.BASE = "http://localhost:8000";
let people: Array<PersonPublic> = []

function prettyPerson(person: PersonPublic) { return `✨ ${person.name} ✨` }
async function geteople() {  people = await DefaultService.personListPersonListPost() }
async function getPerson(idx: number): Promise<PersonPrivate> { return DefaultService.personPersonIdxPost(idx) }

geteople().then( async () => {
    console.log(prettyPerson(people[0]))
    getPerson(0).then( person => console.log(prettyPerson(person)))
})

