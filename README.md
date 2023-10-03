                                    --- ATOMIC DESIGN ---

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

1.Codebase (One codebase tracked in revision control, many deploys):
    12-factor app advocates that every application should have its own codebase (repos). Multiple codebases for multiple versions must be avoided. Please do note that having branches would be fine. I.e. For all the deployment environments there should be only one repo but not multiple.

2.Dependencies (Explicitly declare and isolate the dependencies):
    It talks about managing the dependencies externally using dependency management tools instead of adding them to your codebase.

    From the perspective of the java, you can think of Gradle as a dependency manager. You will mention all the dependencies in build.gradle file and your application will download all the mentioned dependencies from maven repository or various other repositories.

3.Config (Store configurations in an environment):
    Anything that varies between the deployment environments is considered as configuration. This includes:
        Database connections and credentials, system integration endpoints
        Credentials to external services such as Amazon S3 or Twitter or any other external apps
        Application-specific information like IP Addresses, ports, and hostnames, etc.

4.Backing Services (treat backing resources as attached resources):
    As per 12 factor app principles, a backing service is an application/service the app consumes over the network as part of its normal operation.
    Database, Message Brokers, any other external systems that the app communicates is treated as Backing service.

5.Build, release, and Run (Strictly separate build and run stages):
    The application must have a strict separation between the build, release, and run stages. Let us understand each stage in more detail.

        Build stage: transform the code into an executable bundle/ build package.

        Release stage: get the build package from the build stage and combines with the configurations of the deployment environment and make your application ready to run.

        Run stage: It is like running your app in the execution environment.

        Microservices:
        You can use CI/CD tools to automate the builds and deployment process. Docker images make it easy to separate the build, release, and run stages more efficiently.

6.Processes (execute the app as one or more stateless processes):
    The app is executed inside the execution environment as a process. An app can have one or more instances/processes to meet the user/customer demands.

    As per 12-factor principles, the application should not store the data in in-memory and it must be saved to a store and use from there. As far as the state concern, your application should store the state in the database instead of in memory of the process.

7.Port binding (Export services via port binding):
    The twelve-factor app is completely self-contained and doesn’t rely on runtime injection of a webserver into the execution environment to create a web-facing service. The web app exports HTTP as a service by binding to a port, and listening to requests coming in on that port.

8.Concurrency (Scale out via the process model):
    This talks about scaling the application. Twelve-factor app principles suggest to consider running your application as multiple processes/instances instead of running in one large system. You can still opt-in for threads to improve the concurrent handling of the requests.

9.Disposability (maximize the robustness with fast startup and graceful shutdown):
    The twelve-factor app’s processes are disposable, meaning they can be started or stopped at a moment’s notice. When the application is shutting down or starting, an instance should not impact the application state.

10.Development/production parity (Keep development, staging, and production as similar as possible):
    The twelve-factor methodology suggests keeping the gap between development and production environment as minimal as possible. This reduces the risks of showing up bugs in a specific environment.

11.Logs (Treat logs as event streams):
    Logs become paramount in troubleshooting the production issues or understanding the user behavior. Logs provide visibility into the behavior of a running application.

12.Admin processes (Run admin/management tasks as one-off processes):
    There is a number of one-off processes as part of the application deployment like data migration, executing one-off scripts in a specific environment.
    Twelve-factor principles advocates for keeping such administrative tasks as part of the application codebase in the repository. By doing so, one-off scripts follow the same process defined for your codebase.