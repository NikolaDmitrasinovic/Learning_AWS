\# 🧭 AWS Serverless Learning Roadmap (5 Weeks, Updated 2025 Edition)



\*\*Progress Tracker Summary\*\*

\- \[ ] Pre-Week 1 – Setup

\- \[ ] Week 1 – AWS Foundations

\- \[ ] Week 2 – Lambda + API Gateway

\- \[ ] Week 3 – CDK + SDK

\- \[ ] Week 4 – DynamoDB + S3

\- \[ ] Week 5 – Final Project



---



\## 🔧 Pre-Week 1 – Setup Checklist



Complete this setup before you start Week 1 — it saves hours later.



\### Official Links

\- \[AWS Free Tier Signup](https://aws.amazon.com/free)

\- \[AWS CLI Install Docs](https://docs.aws.amazon.com/cli/latest/userguide/getting-started-install.html)

\- \[AWS Toolkit for Visual Studio 2022](https://marketplace.visualstudio.com/items?itemName=AmazonWebServices.AWSToolkitforVisualStudio2022)

\- \[AWS CDK Install Docs](https://docs.aws.amazon.com/cdk/latest/guide/work-with-cdk.html)

\- \[Node.js (LTS)](https://nodejs.org/en/download)

\- \[AWS SDK for .NET Docs](https://docs.aws.amazon.com/sdk-for-net)



\### Setup Steps

\- \[ ] 🆓 Create AWS Free Tier account → verify billing \& set spending alert  

\- \[ ] 💻 Install AWS CLI → `aws --version`  

\- \[ ] 🔑 Configure credentials → `aws configure` (set Access Key, Secret Key, Region)  

\- \[ ] 🧰 Install AWS Toolkit for Visual Studio (from Marketplace)  

\- \[ ] ⚙️ Install AWS CDK → `npm install -g aws-cdk` then `cdk --version`  

\- \[ ] 🧩 Create named profile (optional) → `aws configure --profile dev`  

\- \[ ] 🪣 Verify access → `aws s3 ls` (should list empty buckets or none)  



✅ \*\*Goal →\*\* Account + CLI + Toolkit + CDK ready to go



\### Setup Videos

1\. \[Install \& Configure AWS CLI (Windows)](https://www.youtube.com/watch?v=11aYe\_VWMg0)  

2\. \[AWS CLI for Beginners – Complete Guide](https://www.youtube.com/watch?v=PWAnY-w1SGQ)  

3\. \[AWS CDK Crash Course for Beginners](https://www.youtube.com/watch?v=D4Asp5g4fp8)  

4\. \[AWS Toolkit for Visual Studio Intro](https://www.youtube.com/watch?v=HxONHs-LmGg)  

5\. \[AWS Lambda and .NET Getting Started](https://www.youtube.com/watch?v=WaZn\_8\_2RTQ)



---



\## 🧩 Pluralsight Learning Paths (Current 2025 Versions)



These replace the retired “AWS Developer: Getting Started” course.  

Slot them into your roadmap as follows:



| Timeframe | Pluralsight Path | How to Use |

|------------|------------------|-------------|

| \*\*Weeks 1–5 (main)\*\* | 🟢 \[\*\*Building Serverless Applications on AWS\*\*](https://www.pluralsight.com/paths/building-serverless-applications-on-aws) | Your \*\*primary path\*\*. It aligns with Lambda, API Gateway, DynamoDB, S3, and CDK. Do 1–2 modules per week, matching the roadmap topics. |

| \*\*Weeks 2–4 (deep dive)\*\* | 🟣 \[\*\*AWS Lambda Essentials\*\*](https://www.pluralsight.com/paths/aws-lambda-essentials) | Use this during Lambda + API Gateway (Week 2) and CDK + SDK (Week 3) to strengthen Lambda/.NET deployment understanding. |

| \*\*Optional / Ongoing\*\* | 🟠 \[\*\*AWS Application Development\*\*](https://www.pluralsight.com/paths/aws-application-development) | Broader overview (messaging, data services, CI/CD). Use later if you want extra depth beyond serverless. |



💡 \*Tip:\* In each week’s “Mon” task, replace older course references with the matching module(s) from these paths.



---



\## 📆 Week 1 – AWS Foundations \& Orientation



\*\*Goal:\*\* Understand AWS basics, IAM, and Console.



\- \[ ] ☁️ Mon – \*\*Pluralsight → Building Serverless Applications on AWS\*\* (intro modules)  

\- \[ ] 👤 Tue – IAM (Users, Roles, Policies). Create limited IAM user.  

\- \[ ] 🧭 Wed – Explore S3, Lambda, DynamoDB, API Gateway in Console.  

\- \[ ] 💻 Thu – Run `aws configure` + list S3 buckets.  

\- \[ ] 🧠 Fri – Write 1-line description of each core service.  

\- \[ ] 🔧 Sat – Create S3 bucket; upload \& retrieve file via Console + CLI.  

\- \[ ] ☕ Sun – (Optional) Watch \*Building Serverless Apps on AWS\* (AWS re:Invent talk).  



✅ \*\*End Goal →\*\* Comfortably navigate AWS Console and explain core services.



---



\## ⚙️ Week 2 – AWS Lambda + API Gateway



\*\*Goal:\*\* Run backend logic in Lambda and expose it via API Gateway.



\- \[ ] 💡 Mon – \*\*Pluralsight → AWS Lambda Essentials\*\* (Intro to Serverless with AWS Lambda).  

\- \[ ] 🔔 Tue – Study Lambda triggers + IAM execution roles.  

\- \[ ] 🌐 Wed – Learn API Gateway (resources, methods, integrations).  

\- \[ ] 🔗 Thu – Connect API Gateway → Lambda for “Hello World” API.  

\- \[ ] 🧠 Fri – Diagram IAM flow (Gateway → Lambda → DynamoDB).  

\- \[ ] 🧪 Sat – Build small REST API (GET/POST) via Gateway + Lambda.  

\- \[ ] ✍️ Sun – Write summary: “What happens from HTTP request to Lambda execution?”  



✅ \*\*End Goal →\*\* Working Lambda accessible through API Gateway.



---



\## 🧱 Week 3 – AWS CDK + SDK (for .NET)



\*\*Goal:\*\* Automate infrastructure and interact with AWS from code.



\- \[ ] 🧰 Mon – \*\*Pluralsight → Building Serverless Applications on AWS\*\* (CDK modules).  

\- \[ ] 🏗️ Tue – Define stack (API Gateway + Lambda + placeholder DynamoDB).  

\- \[ ] 🧩 Wed – Use AWS SDK for .NET to upload to S3 and query DynamoDB (mock data ok).  

\- \[ ] 🔒 Thu – Learn env vars, secrets, IAM roles for Lambdas.  

\- \[ ] 🧠 Fri – Compare manual setup vs Infrastructure-as-Code.  

\- \[ ] 🧪 Sat – Deploy initial stack via `cdk deploy`.  

\- \[ ] ✍️ Sun – Write notes on what CDK automated and how SDK interacts.  



✅ \*\*End Goal →\*\* Deploy a serverless stack entirely from code using CDK and SDK.



---



\## 💾 Week 4 – DynamoDB + S3 (via CDK)



\*\*Goal:\*\* Add persistence and file storage to your stack.



\- \[ ] ⚡ Mon – \*\*Pluralsight → Building Serverless Applications on AWS\*\* (DynamoDB + S3 modules).  

\- \[ ] 🧮 Tue – Add CRUD operations in Lambda (backed by DynamoDB).  

\- \[ ] 🪣 Wed – Integrate S3 for file uploads (via presigned URLs).  

\- \[ ] 💻 Thu – Use CDK to create DynamoDB + S3 resources automatically.  

\- \[ ] 🧠 Fri – Test end-to-end (API → Lambda → DynamoDB/S3).  

\- \[ ] 🧪 Sat – Build \*\*Todo API v2\*\* with full data + file handling.  

\- \[ ] ☕ Sun – (Optional) Watch \*Best Practices for DynamoDB\*.  



✅ \*\*End Goal →\*\* Full API with data + file storage deployed through CDK.



---



\## 🧑‍💻 Week 5 – Final Project : Serverless Note Keeper API



\*\*Goal:\*\* Combine everything into a real AWS serverless app.  

\*\*Architecture:\*\* API Gateway → Lambda (C#) → DynamoDB → S3 (defined in CDK \& accessed via SDK).



\- \[ ] 🏗️ Mon – Design endpoints (`/notes`, `/notes/{id}`, `/upload`).  

\- \[ ] 💻 Tue – Implement Lambda handlers (C#).  

\- \[ ] 🧱 Wed – Add CDK stack (API, Lambdas, DynamoDB, S3).  

\- \[ ] 🚀 Thu – Deploy with `cdk deploy`; test via Postman or curl.  

\- \[ ] 🧩 Fri – Build .NET client using AWS SDK.  

\- \[ ] 🎉 Sat – Document setup + record short demo.  

\- \[ ] ☕ Sun – Review \& list topics to revisit.  



✅ \*\*End Goal →\*\* Full serverless app built, deployed, and documented.



---



\## 🔗 Helpful Links

\- \[AWS Free Tier](https://aws.amazon.com/free)  

\- \[AWS CDK Workshop](https://cdkworkshop.com)  

\- \[ServerlessLand Tutorials](https://serverlessland.com)  

\- \[Pluralsight – Building Serverless Applications on AWS](https://www.pluralsight.com/paths/building-serverless-applications-on-aws)  

\- \[Pluralsight – AWS Lambda Essentials](https://www.pluralsight.com/paths/aws-lambda-essentials)  

\- \[AWS SDK for .NET Docs](https://docs.aws.amazon.com/sdk-for-net)



---



\## 🧠 Study Tips

\- \[ ] Keep daily notes (“What did I learn today?”)  

\- \[ ] Stay within Free Tier usage  

\- \[ ] Use AWS Toolkit for Visual Studio for Lambda deployments  

\- \[ ] Revisit IAM roles often — key to AWS security  

\- \[ ] Pair Pluralsight modules + hands-on practice the same day  



⭐ \*\*By end of Week 5 →\*\* Built and deployed a full serverless backend (AWS Lambda, API Gateway, DynamoDB, S3) using CDK + SDK for .NET, aligned with the latest AWS learning paths.



