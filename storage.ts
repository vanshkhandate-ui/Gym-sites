import { db } from "./db";
import {
  contactMessages,
  services,
  type InsertContactMessage,
  type ContactMessage,
  type InsertService,
  type Service
} from "@shared/schema";

export interface IStorage {
  createContactMessage(message: InsertContactMessage): Promise<ContactMessage>;
  getServices(): Promise<Service[]>;
  createService(service: InsertService): Promise<Service>;
}

export class DatabaseStorage implements IStorage {
  async createContactMessage(message: InsertContactMessage): Promise<ContactMessage> {
    const [newMessage] = await db.insert(contactMessages).values(message).returning();
    return newMessage;
  }

  async getServices(): Promise<Service[]> {
    return await db.select().from(services);
  }

  async createService(service: InsertService): Promise<Service> {
    const [newService] = await db.insert(services).values(service).returning();
    return newService;
  }
}

export const storage = new DatabaseStorage();
