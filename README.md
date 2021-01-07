# Observer Pattern

The following text was obtained from the book [Head First Desing Patterns](https://www.amazon.com/-/es/Eric-Freeman/dp/0596007124).


### Desing principles

* Strive for loosely coupled designs between objects that interact.

### The observer pattern and the power of loose coupling

The observer pattern consists of SUBJECTS and OBSERVERS. The subject and the observers are defined as one-to-many relationship. The observers are dependent of the subject such that when the subject's state changes, the observers get notified. Depending on the style of notification, the observer may be also be updated with new values.

Loose Coupling. When two objects are loosely coupled, they can interact, but have very little knowledge of each other.

Observer Pattern provides an object design where subjects and observers are loosely coupled because:

* The only thing the subject knows about an observer is that implements a certain interface (the observer interface). It doesn't need to know the concrete class of the observer, what it does, or anything else about it.
* Add new observers at any time.
* Never need to modify the subject to ad new types of observers.
* Reuse subjects or observers independetly of each other.
* Changes to either the subject or and observer will not affect the other.

That is why the 

Loosely coupled desings allow us to build flexible OO systems that can handle change because they minimize the interdependency between objects.

### In resume

The observer pattern defines a one-to-many dependency between objects so that when one object changes state,all of its dependents are notified and updated automatically.

