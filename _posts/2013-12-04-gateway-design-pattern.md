---
layout: post
title:  "Gateway Design Pattern"
date:   2013-12-04 16:39:52
categories: design patterns software programming
---

**Design Patterns (rules for lazy developers)**
I always find myself boasting when I think I solved a problem in a creative way but sure enough I found its been done that way for a while I just never knew about it. 

Basically every design pattern has been like this. "Thats how I normally do things.. I just wish I knew it earlier.."

I learnt a few design patterns at University and they are a powerful way to tackle common problems. Patterns such as MVC and Facade are some of the patterns I see constanly.

Today I learnt another, its called the **"Gateway Design"** pattern. 

**Fancy Pants Defination**
A fancy-pants defination of the **"Gateway Design"** pattern is:
> A gateway encapsulates the semantic gap between the object-oriented domain layer and the relation-oriented persistence layer.

I am not particularly a fan of fancy-pants definations, so here is my stab at the defination:
> A gateway can be anything that hides access to a remote server or a complex library.

Working with external API's is always a complicated process as involves understanding different relations between objects and data.

The Gateway Pattern tries to hide this complexity by describing objects who purpose is to encapuslate access to an external system or resource. For example a external system or resource could be a database or an XML stream.

This means that gateways are used represent a layer above the database and are the only doorway to accessing its data. Which inturn allows us to decouple the business logic from the underlying service layer. This is why its called a "Gateway"

**How do you apply it?**
For each persistent class in the domain layer we assume there is a corresponding table (virtual or base) in the database, and we give it a "Gateway". Its that easy!

**So Why Am I using it?**
Using the design pattern, allows to create tests because it allows us to mock the return values later without requiring access to the live webservice, because we can create a "FakeObject" which the Gateway will be protecting. 





