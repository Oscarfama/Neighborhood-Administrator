import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';

admin.initializeApp();

const db = admin.firestore();
const settings = { timestampsInSnapshots: true};
db.settings(settings);

export const archiveChat = functions.firestore
  .document('chats/{chatId}')
  .onUpdate(change => {
    const data = change.after.data();
    
    const maxLen= 50;
    const msgLen = data.message.length;
    const charLen = JSON.stringify(data).length;

    if(charLen >= 10000 || msgLen >= maxLen){
      const batch = db.batch();
      data.message.splice(0,msgLen - maxLen);
      const ref = db.collection ('chats').doc(change.after.id);
      batch.set(ref,data,{merge:true});
      return batch.commit();
    }else {
      return null;
    }
  });
