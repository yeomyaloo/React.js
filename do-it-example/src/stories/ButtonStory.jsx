import React from 'react';
import { storiesOf } from '@storybook/react';

import Button from '../04/Button';

storiesOf('Button', module)
  .addWithJSX('기본 설정', () => <Button>안녕하세요</Button>)
  .addWithJSX('large 예제', () => <Button large>안녕하세요</Button>)
  .addWithJSX('xlarge 예제', () => <Button xlarge>안녕하세요</Button>)
  .addWithJSX('small 예제', () => <Button small>안녕하세요</Button>)
  .addWithJSX('xsmall 예제', () => <Button xsmall>안녕하세요</Button>)
  .addWithJSX('primary 예제', () => <Button primary>안녕하세요</Button>)
  .addWithJSX('secondary 예제', () => <Button secondary>안녕하세요</Button>)
  .addWithJSX('primary large 예제', () => (
    <Button primary large>
      안녕하세요
    </Button>
  ));
