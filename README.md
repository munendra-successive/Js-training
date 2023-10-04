------------------------------------------------------ ATOMIC DESIGN -----------------------------------------------------------

What is Atomic Design

Atomic design is methodology for creating design systems. There are five distinct levels in atomic design:
-Atoms
-Molecules
-Organisms
-Templates
-Pages

Atoms
Atoms are the basic building blocks of matter. Applied to web interfaces, atoms are our HTML tags, such as a form label, an input or a button.

Molecules
Molecules are groups of atoms bonded together and are the smallest fundamental units of a compound. These molecules take on their own properties and serve as the backbone of our design systems.

Organisms
Molecules give us some building blocks to work with, and we can now combine them together to form organisms. Organisms are groups of molecules joined together to form a relatively complex, distinct section of an interface.

Templates
At the template stage, we break our chemistry analogy to get into language that makes more sense to our clients and our final output. Templates consist mostly of groups of organisms stitched together to form pages. It’s here where we start to see the design coming together and start seeing things like layout in action.

Pages
Pages are specific instances of templates. Here, placeholder content is replaced with real representative content to give an accurate depiction of what a user will ultimately see.

                                    ---  12-Factor App  ---

12-factor app is a methodology or set of principles for building the scalable and performant, independent, and most resilient enterprise applications. It establishes the general principles and guidelines for creating robust enterprise applications. 12-factor app principles got very popular as it aligns with Microservice principles

Below are detailed explanation of 12-factor principles

Codebase:
    Use a single codebase per application, managed in version control. Multiple codebases indicate a distributed system.

Dependencies: 
    Explicitly declare and isolate dependencies to avoid version conflicts and simplify development.

Config:
    Store configurations (e.g., database credentials) separately from the code, in environment variables, for flexibility across different environments.

Backing Services: 
    Treat external services (e.g., databases) as attached resources, ensuring easy interchangeability.

Build, Release, Run: 
    Separate the deployment process into three phases: build, release, and run, to streamline and manage deployments.

Processes: 
    Design applications to run as stateless processes, allowing instances to start and stop independently without affecting functionality.

Port Binding: 
    Applications should export services via port binding and be self-contained, reducing the need for additional server software.

Concurrency:
    Divide applications into smaller, independently scalable processes for better horizontal scaling and concurrency.

Disposability: 
    Maximize robustness with quick startup and graceful shutdown, ensuring that process failures don't disrupt the application.

Development/Production Parity:  
    Keep development, staging, and production environments as similar as possible to catch issues early and streamline deployment.

Logs: 
    Treat logs as event streams for debugging and monitoring, and don't tightly couple logging to the application.

Admin Processes:
    Run administrative tasks as part of the application codebase, adhering to the 12-factor principles for consistency.


