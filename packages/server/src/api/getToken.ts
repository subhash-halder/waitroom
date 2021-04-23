import { Request, Response } from 'express';
import { logError } from '../utils/log';
import { isString } from '../utils/typeChecker';
import { ApiResponse, ResponseType } from '../utils/types';
import { RtcTokenBuilder, RtcRole } from 'agora-access-token';
import conf from '../utils/config';

export default async (req: Request, resp: Response): Promise<void> => {
  resp.header('Cache-Control', 'private, no-cache, no-store, must-revalidate');
  resp.header('Expires', '-1');
  resp.header('Pragma', 'no-cache');

  const respReturn: ApiResponse = {
    status: ResponseType.error,
    data: {
      global: 'Something went wrong',
    },
  };

  const channelId = req.query.channelId;

  if (isString(channelId) && channelId) {
    const uid = 0; // req.query.uid;
    // if (!uid || uid == '') {
    //   uid = 0;
    // }
    // get role
    let role = RtcRole.SUBSCRIBER;
    if (req.query.role == 'publisher') {
      role = RtcRole.PUBLISHER;
    }
    // get the expire time
    let expireTime: any = req.query.expireTime;
    if (!expireTime || expireTime == '') {
      expireTime = 3600;
    } else {
      expireTime = parseInt(expireTime, 10);
    }
    // calculate privilege expire time
    const currentTime = Math.floor(Date.now() / 1000);
    const privilegeExpireTime = currentTime + expireTime;
    const token = RtcTokenBuilder.buildTokenWithUid(
      conf.agora_app_id,
      conf.agora_app_secret,
      channelId,
      uid,
      role,
      privilegeExpireTime,
    );
    respReturn.status = ResponseType.success;
    respReturn.data = {
      token,
    };
  } else {
    logError(new Error('No channelId found in the request'));
    respReturn.status = ResponseType.error;
    respReturn.data = {
      global: 'No channelId found',
    };
  }
  resp.send(JSON.stringify(respReturn));
};
