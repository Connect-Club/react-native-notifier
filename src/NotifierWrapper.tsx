import React from 'react';
import { NotifierRoot } from './Notifier';
import type { ShowNotificationParams } from './types';

interface NotifierWrapperProps extends ShowNotificationParams {
  children: React.ReactNode;
}

export const NotifierWrapper = ({ children, ...defaultParams }: NotifierWrapperProps) => (
  <>
    {children}
    <NotifierRoot {...defaultParams} />
  </>
);
