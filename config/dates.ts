/*
 * ELASTICSEARCH CONFIDENTIAL
 * __________________
 *
 *  Copyright Elasticsearch B.V. All rights reserved.
 *
 * NOTICE:  All information contained herein is, and remains
 * the property of Elasticsearch B.V. and its suppliers, if any.
 * The intellectual and technical concepts contained herein
 * are proprietary to Elasticsearch B.V. and its suppliers and
 * may be covered by U.S. and Foreign Patents, patents in
 * process, and are protected by trade secret or copyright
 * law.  Dissemination of this information or reproduction of
 * this material is strictly forbidden unless prior written
 * permission is obtained from Elasticsearch B.V.
 */

import { DateTimeFormatOptions } from '@formatjs/ecma402-abstract'

export const numericDateTime: DateTimeFormatOptions = {
  year: `numeric`,
  month: `short`,
  day: `numeric`,
  hour: `numeric`,
  minute: `numeric`,
  second: `numeric`,
  timeZone: `UTC`,
  timeZoneName: `short`,
}

export const shortDate: DateTimeFormatOptions = {
  year: `numeric`,
  month: `short`,
  day: `numeric`,
}

export const longDate: DateTimeFormatOptions = {
  year: `numeric`,
  month: `long`,
  day: `numeric`,
}