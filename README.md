# Azure Fullstack Sample (Spring Boot + Angular + Azure SQL)

## Deployment Steps
1. Create Azure SQL Database and update `backend/src/main/resources/application.properties` with connection string.
2. Deploy backend:
   ```bash
   cd backend
   mvn clean package
   az webapp up --runtime "JAVA:21-java21" --name my-backend-app --resource-group my-rg --plan my-plan
   ```
3. Deploy frontend:
   ```bash
   cd frontend
   ng build --prod
   az webapp up --runtime "NODE:18-lts" --name my-frontend-app --resource-group my-rg --plan my-plan
   ```
4. Update `customer.service.ts` with backend API URL.

## CI/CD Setup

### Azure DevOps
1. Create a new pipeline and point it to `.azure-pipelines/azure-pipelines.yml`.
2. Set up a service connection to your Azure subscription.
3. Replace `<your-service-connection>` with the actual connection name.

### GitHub Actions
1. Add secrets in your GitHub repo:
   - `AZURE_WEBAPP_PUBLISH_PROFILE_BACKEND`
   - `AZURE_WEBAPP_PUBLISH_PROFILE_FRONTEND`
2. Workflow is defined in `.github/workflows/ci-cd.yml`.
