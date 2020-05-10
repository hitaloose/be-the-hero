const request = require("supertest");
const app = require("../../src/app");
const connection = require("../../src/database");

describe("Incident", () => {
  beforeEach(async () => {
    await connection.migrate.rollback();
    await connection.migrate.latest();
  });

  afterAll(async () => {
    await connection.destroy();
  });

  it("should be able to create a new incident", async () => {
    const { body } = await request(app).post("/ongs").send({
      name: "APAE",
      email: "contato@apae.com.br",
      whatsapp: "2835533553",
      city: "Guacui",
      uf: "ES",
    });

    const response = await request(app)
      .post("/incidents")
      .set("Authorization", body.id)
      .send({
        title: "Caso 1",
        description: "Detalhes do caso",
        value: 120,
      });

    expect(response.body).toHaveProperty("command");
    expect(response.body.command).toBe("INSERT");
  });
});
