const request = require("supertest");
const app = require("../../src/app");
const connection = require("../../src/database");

describe("ONG", () => {
  beforeEach(async () => {
    await connection.migrate.rollback();
    await connection.migrate.latest();
  });

  afterAll(async () => {
    await connection.destroy();
  });

  it("should be able to create a new ONG", async () => {
    const response = await request(app).post("/ongs").send({
      name: "APAE",
      email: "contato@apae.com.br",
      whatsapp: "2835533553",
      city: "Guacui",
      uf: "ES",
    });

    expect(response.body).toHaveProperty("id");
    expect(response.body.id).toHaveLength(8);
  });

  it("should get all ONGs", async () => {
    const response = await request(app).get("/ongs");

    expect(response.body).toEqual([]);
  });
});
