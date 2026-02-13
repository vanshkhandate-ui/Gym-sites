import type { Express } from "express";
import type { Server } from "http";
import { storage } from "./storage";
import { api } from "@shared/routes";
import { z } from "zod";

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {
  
  app.post(api.contact.submit.path, async (req, res) => {
    try {
      const input = api.contact.submit.input.parse(req.body);
      const message = await storage.createContactMessage(input);
      res.status(201).json(message);
    } catch (err) {
      if (err instanceof z.ZodError) {
        return res.status(400).json({
          message: err.errors[0].message,
          field: err.errors[0].path.join('.'),
        });
      }
      throw err;
    }
  });

  app.get(api.services.list.path, async (req, res) => {
    const services = await storage.getServices();
    res.json(services);
  });

  // Seed data function
  await seedDatabase();

  return httpServer;
}

async function seedDatabase() {
  const existingServices = await storage.getServices();
  if (existingServices.length === 0) {
    console.log("Seeding database with initial services...");
    await storage.createService({
      title: "Weightlifting Zone",
      description: "State-of-the-art free weights, squat racks, and resistance machines to build strength.",
      price: "$50/mo",
      imageUrl: "/images/weights.jpg"
    });
    await storage.createService({
      title: "Cardio Center",
      description: "Latest treadmills, ellipticals, and rowers with heart rate monitoring.",
      price: "$40/mo",
      imageUrl: "/images/cardio.jpg"
    });
    await storage.createService({
      title: "Yoga & Classes",
      description: "Group classes including Yoga, Pilates, and HIIT led by certified instructors.",
      price: "$20/class",
      imageUrl: "/images/yoga.jpg"
    });
    console.log("Database seeded successfully.");
  }
}
