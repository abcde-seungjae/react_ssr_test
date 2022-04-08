/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import {useData} from './data';

export default function Comments() {
  const comments = useData();

  const imageSet = () => {
    comments.map((url, i) => {
      return axios.get(url,{
        responseType: 'arraybuffer'
      })
      .then(response => Buffer.from(response.data, 'binary').toString('base64'))
    });
  }

  return (
    <>
      {comments.map((comment, i) => (
        // <p className="comment" key={i}>
        //   {comment}
        // </p>
        <img src={comment} key={i}></img>
      ))}
    </>
  );
}
