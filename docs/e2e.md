
## [Tennis Challenge Sydney](./index.md)

[![Youtube](./img/youtube.png)](https://www.youtube.com/watch?v=_3vsosVX9r0)

# e2e Testing with Cucumber

A Primer for both Technical and Business Stakeholders

### Solving a common problem  

In theory Agile calls for small incremental changes with the delivery  
team constantly feeding the stakeholders back the question  

‘Is this what you mean?’

In practice situations can and do arise where developers spend time implementing a misunderstanding. 

Not only does the delivery team waste effort, but they risk corrupting the integrity of the codebase with concepts and functionality that do not reflect the original idea.

### Introducing Cucumber 

An open source tool which tests business-readable specifications against code on our development stack.

What Cucumber isn’t. Cucumber is not...

- Difficult
- A programming language
- Technical
- Magic 

What Cucumber is:

Cucumber tests of business-readable specifications against code.

All stakeholders from the least to the most technical members of the team can collaborate in the process.

It’s an easy to understand common language for developers, business stakeholders and agile coaches to help not only to build the software right, but also to build the right software. 

It’s about collaboration and formalising the language we use to define our software.

### How does it work?

Cucumber helps filter out misunderstandings early

Instead of a stakeholder passing requirements to the engineering team, the developers and stakeholder collaborate to write automated tests that express the outcome the stakeholder wants.

The tests are written in the cutely named ‘Gherkin’ syntax. Gherkin uses a set of special keywords to give structure and meaning to natural language.

### What does Gherkin look like?
```bash
    Feature: Eating too many cucumbers may not be good for you

        Eating too much of anything may not be good for you.

        Scenario: Eating a few is no problem            
        Given Alice is hungry 
                When she eats 3 cucumbers
                Then she will be full
```

### Gherkin syntax

Tests are written in the cutely named ‘Gherkin’ syntax. 

Gherkin uses a set of special keywords to give structure and meaning to natural language. The simplest way to think about structuring a test is to consider these three keywords: 

__Given__ (sets up what part of the software you’re interested in testing)  
__When__ (some kind of event)  
__Then__ (The outcome we expect)  

NEXT => [TDD](https://listingslab-software.github.io/tennis-challenge-sydney/tdd.html)