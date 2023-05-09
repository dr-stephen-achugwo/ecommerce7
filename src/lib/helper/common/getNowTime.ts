import dayjs from 'dayjs'
import ja from 'dayjs/locale/ja'

dayjs.locale(ja)

export const getNowTime = (): string => dayjs().toDate().toString()
