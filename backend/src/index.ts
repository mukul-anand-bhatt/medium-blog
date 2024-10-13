import { Hono } from 'hono'
import { PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate'
import { decode, sign, verify } from 'hono/jwt'

const app = new Hono<{
  Bindings:{
    DATABASE_URL: string;
    JWT_SECRET:string;
  }
}>()

app.post('/api/v1/user/signup',async (c)=>{
  const body = await c.req.json();
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL

  }).$extends(withAccelerate())


  try {
    const createdUser  = await prisma.user.create({
      data: {
        email: body.email,
        password: body.password,
        name: body.name,
      }
    });
    const jwt = await sign({
      id: createdUser .id
    }, c.env.JWT_SECRET)
    return c.text(jwt)
  } catch (e) {
    c.status(411);
    return c.text('Invalid')
  }
    
  })



export default app
