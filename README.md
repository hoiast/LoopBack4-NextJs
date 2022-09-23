# LoopBack4-NextJs
Simple CRUD using [PostgreSQL](https://www.postgresql.org/), [LoopBack](https://loopback.io/) and [Next.js](https://nextjs.org/)

## Installation and Usage
Please follow instructions of README files in each folder. Please note that you will need to run both __LoopBack__ (Back end server) and __Next.js__ (Front end server) in order to see the results.

## Techs 
- [LoopBack](https://loopback.io/)
    - [TypeScript](https://www.typescriptlang.org/)
    - [PostgreSQL](https://www.postgresql.org/)

- [Next.js](https://nextjs.org/)
    - [React](https://reactjs.org/)
    - [TypeScript](https://www.typescriptlang.org/)
    - [Materialize CSS](https://materializecss.com/)

## ER model
![ER model](https://github.com/hoiast/LoopBack4-NextJs/blob/main/ERModel_563x176.jpeg)

Comments on the ER model implementation:
- Field prefixes were removed when unnecessary (e.g. "pes_" prefix in "pes_id" field was removed because it is already clear that it is a person id)
- CamelCase was used for field names (e.g. "pes_data_nascimento" was changed to "dataNascimento")
- Foreign keys are no longer abbreviated (e.g. "prof_id" was changed to "profissaoId")
- Strong relations are not available out-of-the-box in LoopBack 4, so they were implemented as weak relations (e.g. "profissaoId" is not a foreign key in "Pessoa" table) and do not support delete cascade. It is possible to implement strong relations in LoopBack 4, but it requires some extra work when dealing with scaffolded relations, controllers and models.
- Loopback validations are not fully implemented.
- CPF and phone number mask are lacking in the front end.

## Screenshot
![Screenshot Home](https://github.com/hoiast/LoopBack4-NextJs/blob/main/ScreenshotHome_1915x945.jpeg)



