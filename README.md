# swe_645_hw3
Swe645 HW 3 Frontend and Backend
Manav Garkel - G01229386
My Homepage link:
http://hw1swe645part1.s3-website-us-east-1.amazonaws.com/

URL of HW3 assignment:
Frontend:


API:
http://a81486151835411eaad1006ffc916681-163898015.us-east-2.elb.amazonaws.com:5000/



ANGULAR:
For the student survey generated in this assignment, we needed two views for the frontend section in the Angular part of the assignment. The first view was the survey form. This is a student survey form with certain mandatory fields for student information, checkboxes, radio buttons and dropdowns selections. All fo this was done by creating an angular component named Survey. The HTML section has a form and uses the ngForm directive to make the form work. There is an onclicksubmit function that gets triggered when the submit button on the survey form is clicked. The onclicksubmit function is described in the survery.component.ts file. This file injects the http client module and creates and object for in the constructor method. The onclicksubmit function essentially parses through the data that is submitted by the ngForm and creates a formData object. The form data object is then used in the http post method and is posted to the API, the link to which is in the post method along with the formData as the second parameter. This is how the data is submitted to the Restful API.
On the other hand, there is another component used in this angular project called results. The result.component.ts uses the API to make calls to the get method using the injected http client module. It then subscribes to the observable that is returned from the get method and parses through each one of the entries of the observable to create the results of previously posted surveys. Finally, in results.html, one way binding and the ngFor directive is used to then display all the results of previously submitted surveys.

FLASK:
After gaining permission from the professor, the API for this assignment was written using flask which is a python based framework for APIs. It is a simple python script that creates a MySQL object which is used to either post the request to the database or get requests from the database. An api handler function is defined to deal with both cases. For a post request, the data that is received from the form is parsed and the insert into statement is used to post the data to the database. Secondly, if a get request is received, an sql statement that selects all the rows from the database table is executed and returned.

Database:
For housing the data, an AMAZON Relational Database Service was used. This database was setup on AWS following the instruction provided on blackboard. Using the AWS console, Launch DB instance was clicked and MYSQL was selected. Free usage tier was selected on the following page. Next, a name for the database was selected along with the username and password. A new security group was created and the DB instance was launched.

Containerization and Jenkins:
For the angular part of the assignment, a job on Jenkins was created. This job was used to containerize the application and deploy it on EKS. For the Containerization, an nginx base image was used. The dist folder from the angular application was copied to the HTML folder in the ngingx image and the container was then pushed to dockerhub. From there, the Jenkins job then pulled that docker image from the dockerhub repository and deployed it on the EKS cluster using deployment yaml and service yaml files.

For the flask part of the assignment, a similar job was implemented. This job was also used to containerize the application using the dockerfile. The dockerfile for this job, copied the python scrips and req.txt to the server folder on the Ubuntu base image. From there, all the requirements to run this script were downloaded and installed onto the container. Lastly, port 5000 was exposed and the python script is run on the image. From there, the entire image was pushed onto dockerhub and deployment and service yaml files were used to deploy the dockerized container on EKS.
