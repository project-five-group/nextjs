import * as firebaseAdmin from 'firebase-admin';

const projectId = process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID;

if (!firebaseAdmin.apps.length) {
  firebaseAdmin.initializeApp({
    credential: firebaseAdmin.credential.cert({
      privateKey: process.env.NEXT_PUBLIC_FIREBASE_ADMIN_PRIVATE_KEY,
      clientEmail: process.env.NEXT_PUBLIC_FIREBASE_ADMIN_EMAIL,
      projectId,
    }),
    databaseURL: `https://${projectId}.firebaseio.com`,
  });
}

const getServerClient = () => firebaseAdmin.apps[0] as firebaseAdmin.app.App;

export { firebaseAdmin, getServerClient };
