import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

import { ConfigService } from '@nestjs/config';

// Import firebase-admin
import * as admin from 'firebase-admin';
import { ServiceAccount } from 'firebase-admin';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const adminConfig: ServiceAccount = {
    "projectId":  "neos-2e2ed",
    "privateKey": "-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQDid6GIvQtZQUal\n+TYfMDhVa7SbQBWr9uAtJLBRFmkq1+NiCcllQXFwpBJMLIgUqIIvN6kzE9lRc65y\nGlXCXMoBk74bbMbJVxLynzJOS3BRfSS1fYM4ByXwO7er2n7/W6/x5S67yQiRvVFU\nQu2bsLSSU09hd6+uufu1fjl9RQFuoYWV/LuV3vGJcYe4J9ahgxCRuwwQCGIXLPId\nysDE1U0RQJlMtHtQTgaFQfGNcVBxgaqzA9qb0ZdbJA6OkYPu5oljIOQvKK8hBGsR\nNShMDNIXq/BfXAi3G81I8zv5/sevlBLVZtQ1N/s7GxNrlwrF+fV166xB2MEPptDs\nrjcoqUUzAgMBAAECggEAXtPdDdaq09rjbEgoA3M7g3kwDPoOmQ0s3XpJYgrSSqBP\nlBOpAv8eMx5gkwjqikvtBzx1Wu/qxZJ870ZbtqEH7RUiO3WW32PYiUNj2yj3hQez\nwVMnCOTlW+yFgi5hkyefSti+ct9A+VWeonvL5q9dTRAZYySsqasy3NJX3D5y1RF/\nXhcJcaBNkegTCmb7a+MlnzXUiIPrXDwUkTVDD6cfMVDBvSFA+4wcwFjaZNwKTKBA\ndFDgXtQw7NxXRneTEMdlaSqnWGViXxV62v8WGQcxl0InAMQWCl3FLY+1ihitWbWI\n+WhONs80KKZpgzZ40ST9yoxui3e/c5/zmR4lQ6eV4QKBgQD+Spib7CPRBKehD4FT\nl5j/KP24Z5+iOFLohVZUSUFk6nmN3q6zXk3bL54wI1Bqg8gGPTV4bSHd/fLpbZfi\nQkLRbJcaQwFtTuVUjXP/9UgptHpG/yZYj3z9n7J6sF05i0vL3fIfO/Ihny1orB2Z\ncHPFPukB5qn1Y9Q2FkOzpk7aWQKBgQDj/SzKL8mma/8CmnOr9xor9Jn955RQ5OIg\nm13wXUHvuOwlB2pho3rD381pL473f29zMvGfBv8iARrw+TU/KMhN48SmA/2pjWNz\nIE93jsjjIsWdCN0YOOYkpwZA3qDLoiNF4C2RvOcKxecKw1r0vh6+BDQw5YaSGZJk\nkkzAWm/SawKBgQCVNMPyyU4CuM567JQfrlXxceXdq7+4+X98O7B56Dncss/79Gth\nh7X7JCeXa0EmHojhUEztimtSzE0ZtlpmQibepu7KVAKkVqStRgqIZy2eeu08dz3S\nvO7ECk45Ov6YYyloR6Rnu07Jd5K3VjZP7/GeDNm/ac7T022TBuFWqgCekQKBgDqr\nbzhEne7ewcwItRWezDRdiLdHPeqnS+26La1qQkqPWu2Yf+7KZBA96p1T6MWWHLcX\neAhFg6hbgnRanTI4q3snzvYt9rwIL3xz5x9MNjQFQbdMjaDrG4Z5GOneoKBmhA86\nRl/Hrekeznr9lM2Ak2awrEGc/0lfnUWWRHwHidkrAoGATrXRXibxK8gV/91euSZA\nNtkv5TQYBoElTrsL43yDf4rlagi0QQrjLCBFTILRmfemy8Q9o+BBRHPlQegcPJn5\nwd1BtLufxOjTbU2m58/WrbJYGaqOz+GIMFP7yV+SuGC5sqKt8UZ6h4n7I93OOoV6\nfIHrtFEbISSMIN27heCeaxo=\n-----END PRIVATE KEY-----\n".replace(/\\n/g, '\n'),
    "clientEmail": "firebase-adminsdk-tax1w@neos-2e2ed.iam.gserviceaccount.com",
  };

  admin.initializeApp({
    credential: admin.credential.cert(adminConfig),
    databaseURL: 'https://neos-2e2ed-default-rtdb.firebaseio.com/',
  });

  await app.listen(3000);
}
bootstrap();
