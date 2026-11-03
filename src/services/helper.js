import moment from 'moment'
import helper from './helper'
import _ from 'lodash'
import sign from 'jwt-encode'
import Cookies from 'js-cookie'
import 'moment/locale/th' // นำเข้า locale ภาษาไทย
import 'moment/locale/en-gb' // นำเข้า locale ภาษาอังกฤษ (หรือคุณสามารถใช้ 'en' ได้)
import CryptoJS from 'crypto-js'
// import jwt_decode from "jwt-decode";
const secretKey = 'USER_SESSION_LOCAL'

const MONTH = ['มกราคม', 'กุมภาพันธ์', 'มีนาคม', 'เมษายน', 'พฤษภาคม', 'มิถุนายน', 'กรกฎาคม', 'สิงหาคม', 'กันยายน', 'ตุลาคม', 'พฤศจิกายน', 'ธันวาคม']
// ตัด text (set maxlength ใน component)
export function truncateText(text, maxLength) {
  if (text && text.length > maxLength) {
    return text.substring(0, maxLength) + '...'
  }
  return text || '' // Return an empty string if `text` is undefined or null
}
/* Check ID card format */
export const checkIdCardFormat = idCard => {
  if (idCard.length !== 13) return false

  let i,
    sum = 0
  for (i = 0; i < 12; i++) {
    sum += parseFloat(idCard.charAt(i)) * (13 - i)
  }

  if ((11 - (sum % 11)) % 10 != parseFloat(idCard.charAt(12))) {
    return false
  } else {
    return true
  }
}
/* End Check ID card format */

/* Convert date format */
export const convertDateFormat = (date = '', format = '') => {
  if (date !== '') {
    date = new Date(date)

    switch (format) {
      case 'd-m-y':
        date = `${date.getDate()}-${date.getMonth() + 1}-${date.getFullYear()}`
        break

      case 'd / m / y':
        date = `${date.getDate()} / ${date.getMonth() + 1} / ${date.getFullYear()}`
        break

      default:
        date = `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`
        break
    }
  }
  return date
}
/* End Convert date format */

/* Convert mobile number format */
export const convertMobileNoFormat = (mobileNo = '', format = '') => {
  if (mobileNo !== '') {
    switch (format) {
      case '-':
        mobileNo = mobileNo.replace(/(\d)(\d)(\d)(\d)(\d)(\d)(\d)(\d)(\d)(\d)/, '$1$2$3-$4$5$6-$7$8$9$10')
        break

      default:
        mobileNo = mobileNo.replaceAll('-', '')
        break
    }
  }
  return mobileNo
}
/* End Convert mobile number format */

/* Break form submit with enter key */
export const breakKeyDownEnter = e => {
  if (e.key === 'Enter') e.preventDefault()
}
/* End Break form submit with enter key */

// ฟังก์ชันเข้ารหัสข้อมูล
const encryptData = data => {
  return CryptoJS.AES.encrypt(JSON.stringify(data), secretKey).toString()
}

// ฟังก์ชันถอดรหัสข้อมูล
const decryptData = cipherText => {
  const bytes = CryptoJS.AES.decrypt(cipherText, secretKey)
  return JSON.parse(bytes.toString(CryptoJS.enc.Utf8))
}

export default {
  CONFIG: {
    //  CONFIG API
    MAX_SIZE_FILE: 5120000,
    IMG_TYPE_FILE: ['image/png', 'image/jpeg', 'image/jpg']
  },
  encodeJWT: (data = {}, secret = 'secret') => {
    const encode = sign(data, secret)
    return encode
  },
  // decodeJWT: (token = "") => {
  //   const decode = jwt_decode(token);
  //   return decode;
  // },
  GEN: {
    YEAR_OPTION: () => {
      const { arr1DToDownDown, range } = helper.FN
      return arr1DToDownDown(range(2015, +moment().format('YYYY')))
    }
  },
  OPTIONS: {
    CLICKTYPE: [{ value: 'PRODUCT' }, { value: 'BANNER' }, { value: 'ARTICLE' }, { value: 'PROMO_ARTICLE' }, { value: 'EMAGAZINE' }, { value: 'BANNERSUP' }, { value: 'PRODUCT_BANNER_CATEGORY' }],
    GENDER: [
      { value: 1, label: 'Male' },
      { value: 2, label: 'Female' },
      { value: 3, label: 'Non-Specified' }
    ],
    WORK_PATTERN_OPTION_LANG: (lang = 'th') => {
      let option = []
      if ((lang = 'en')) {
        option = [
          { id: 'FULL_TIME', name: 'พนักงานประจำ (Full time)' },
          { id: 'PART_TIME', name: 'พนักงานสัญญาจ้าง (Contract)' },
          { id: 'CONTRACT', name: 'พนักงานชั่วคราว (Part-time)' },
          { id: 'INTERNSHIP', name: 'นักศึกษาฝึกงาน' }
        ]
      } else {
        option = [
          { id: 'FULL_TIME', name: 'พนักงานประจำ (Full time)' },
          { id: 'CONTRACT', name: 'พนักงานสัญญาจ้าง (Contract)' },
          { id: 'PART_TIME', name: 'พนักงานชั่วคราว (Part-time)' },
          { id: 'INTERNSHIP', name: 'นักศึกษาฝึกงาน' }
        ]
      }
      return option
    }
  },
  STYLE: {
    aDisable: (isDisable = false) => {
      return { pointerEvents: isDisable ? 'none' : 'all' }
    }
  },
  FN: {
    delayTime: ms => {
      return new Promise(resolve => setTimeout(resolve, ms))
    },
    cleanObject: (valueObj = {}) => {
      let objectClean = {}
      for (let k in valueObj) {
        if (valueObj[k] || valueObj[k] === 0) {
          objectClean[k] = valueObj[k]
        }
      }
      return objectClean
    },
    getQueryStringParams: url => {
      const queryString = url.split('?')[1]
      if (!queryString) return {}

      const paramsArray = queryString.split('&')
      const params = {}

      paramsArray.forEach(param => {
        const [key, value] = param.split('=')
        params[key] = decodeURIComponent(value)
      })

      return params
    },
    genRange: (startNumber, endNumber) => {
      // Initialize an empty array to store the result
      let numberArray = []
      for (let i = startNumber; i <= endNumber; i++) {
        numberArray.push(i)
      }
      return numberArray
    },
    calPercen(value = 0, total = 1) {
      if (!total) {
        total = 1
      }
      return (value / total) * 100
    },
    removeUndefined: obj => {
      Object.keys(obj).forEach(key => (obj[key] === undefined || obj[key] === '' || obj[key] === '[]' ? delete obj[key] : {}))
      return obj
    },
    range: (start, end) => {
      return Array.from({ length: end - start + 1 }, (_, i) => start + i)
    },
    objectToQueryString: obj => {
      let queryString = ''
      let i = 0
      const maxLen = Object.keys(obj).length
      for (let key in obj) {
        if (obj[key].length) {
          // queryString += encodeURIComponent(key) + "=" + encodeURIComponent(obj[key]);
          queryString += encodeURIComponent(key) + '=' + obj[key].join(',')
        }

        if (obj.hasOwnProperty(key)) {
          if (obj[key].length > 0) {
            queryString += '&'
          }
        }

        i++
      }
      queryString = queryString.substring(0, queryString.length - 1)

      return queryString ? '?' + queryString : ''
    },

    toNumberWithCommas: (x = '') => {
      if (x) {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
      }
      return '0'
    },
    removeCommasToNumber(formattedValue) {
      let rawValue = `${formattedValue}`.replace(/,/g, '')
      return Number(rawValue) // หรือใช้ parseInt(rawValue, 10) ถ้าคุณไม่ต้องการทศนิยม
    },
    toArrayNumber: (arr = []) => {
      return arr.map(item => Number(item)).filter(item => item)
    },
    numberWithZero: (num = '', pad = 4) => {
      let str = '' + num
      let padStr = ''
      for (let i = 0; i < pad; i++) {
        padStr += '0'
      }
      return padStr.substring(0, padStr.length - str.length) + str
    },
    gotoPage: url => {
      if (url) window.open(url, '_blank')
    },
    splitText: (str = '', len = 255) => {
      // if (url) window.open(url, "_blank");
      if (str.length <= len) {
        return str
      }
      return str.substring(0, len) + '...'
    },
    getRandomString(length) {
      return Array.from({ length }, () => String.fromCharCode(_.random(97, 122))).join('')
    },
    formatIdcard: (number, useStar = false) => {
      const asteriskIndices = [10, 11, 12, 13, 14] // Indices to replace with asterisks
      const indexSpace = ['1', '5', '10', '12'] // Indices to replace with asterisks
      const digits = number.split('')
      // Replace the specified indices with asterisks
      let formattedNumber = ''
      for (let i in number) {
        const n = number[i]
        // formattedNumber += i + ' '
        if (indexSpace.includes(i)) {
          formattedNumber += ' '
        }
        if (useStar && i >= 8) {
          formattedNumber += '*'
        } else {
          formattedNumber += n
        }
      }
      return formattedNumber
    },

    getQueryStringParams: url => {
      const queryString = url ? url.split('?')[1] : ''
      if (!queryString) return {}

      const paramsArray = queryString.split('&')
      const params = {}

      paramsArray.forEach(param => {
        const [key, value] = param.split('=')
        params[key] = decodeURIComponent(value)
      })

      return params
    },
    detectBoxContent: (selectorCSS, callBack, realTime = false) => {
      if (!!window.IntersectionObserver) {
        let observer = new IntersectionObserver(
          (entries, observer) => {
            entries.forEach(entry => {
              if (entry.isIntersecting) {
                callBack()
                if (realTime === false) {
                  observer.unobserve(entry.target)
                }
              }
            })
          },
          { rootMargin: '0px 0px -200px 0px' }
        )
        // Add the observer to you swiper
        if (document.querySelector(selectorCSS)) {
          observer.observe(document.querySelector(selectorCSS))
        }
      } else {
        // You can use the polyfill or just start the autoplay
      }
    },
    generateRandomNumber: (n = 10) => {
      return Math.floor(Math.random() * n)
    },
    zeroToDash(value) {
      if (value == 0 || !value) {
        return '-'
      }
      return value
    },

    // ฟังก์ชันสำหรับการจัดการ localStorage
    setEncryptedItem(key, value, ttl) {
      if (typeof window !== 'undefined') {
        const now = new Date()
        const encryptedValue = encryptData({
          value,
          expiry: now.getTime() + ttl // กำหนดเวลาหมดอายุ (มิลลิวินาที)
        })

        localStorage.setItem(key, encryptedValue)
      }
    },

    getDecryptedItem(key) {
      if (typeof window !== 'undefined') {
        const encryptedValue = localStorage.getItem(key)
        if (!encryptedValue) return null

        const data = decryptData(encryptedValue)
        if (!data) return null

        const now = new Date()
        // ถ้าข้อมูลหมดอายุแล้ว
        if (now.getTime() > data.expiry) {
          // ลบข้อมูลที่หมดอายุ
          localStorage.removeItem(key)
          return null
        }

        return data.value
      }
    },

    generateSessionID() {
      const now = new Date()
      const datePart = now
        .toISOString()
        .replace(/[-:TZ]/g, '')
        .slice(0, 14) // YYYYMMDDHHmmss
      const randomPart = Math.random().toString(36).substr(2, 7).toUpperCase() // Random 7 alphanumeric characters
      return `GUEST_${datePart}_${randomPart}`
    },

    formatMobileNo(mobileNo) {
      if (!mobileNo) return ''
      const cleaned = ('' + mobileNo).replace(/\D/g, '')
      const match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/)
      if (match) {
        return match[1] + ' ' + match[2] + ' ' + match[3]
      }
      return mobileNo
    }
  },
  TIME: {
    toShortAllDateTH: dateshow => {
      if (dateshow) {
        const YearTHShort = `${Number(moment(dateshow).format('YYYY')) + 543}`.slice(2, 4)
        return moment(dateshow).format('DD MMM ') + YearTHShort
      }
      return ''
    },
    toShortAllDateNormalTH: dateshow => {
      if (dateshow) {
        const YearTHShort = `${Number(moment(dateshow).format('YYYY')) + 543}`.slice(2, 4)
        return moment(dateshow).format('DD/MM/') + YearTHShort
      }
      return ''
    },
    toShortDateNormal: dateshow => {
      if (dateshow) {
        return moment(dateshow).format('DD/MM/YYYY')
      }
      return ''
    },
    toShortDateNormalTH: dateshow => {
      const YearTH = `${Number(moment(dateshow).format('YYYY')) + 543}`
      if (dateshow) {
        return moment(dateshow).format('DD/MM/') + YearTH
      }
      return ''
    },
    toShortDateTimeNormalTH: dateshow => {
      const YearTH = `${Number(moment(dateshow).format('YYYY')) + 543}`
      if (dateshow) {
        return moment(dateshow).format('DD/MM/') + YearTH + ' ' + moment(dateshow).format('HH:mm:ss') + ' น.'
      }
      return ''
    },

    toShortTime: dateshow => {
      if (dateshow) {
        return moment(dateshow, 'HH:mm:ss').format('HH.mm')
      }
      return ''
    },
    toShortTimeAmPm: dateshow => {
      if (dateshow) {
        return moment(dateshow, 'HH:mm:ss').format('h.mm A')
      }
      return ''
    },
    toDateAdd7: (dateTimeStr = '') => {
      return moment(dateTimeStr).add(7, 'hour').format('YYYY-MM-DD')
    },
    toFullDateTH: dateshow => {
      const YearTH = `${Number(moment(dateshow).format('YYYY')) + 543}`
      let momentUse = moment.locale('th')

      // แสดงเดือนเป็น มิ.ย.
      const month = moment().month(5).format('MMM') // 'มิ.ย.'
      if (dateshow) {
        return moment(dateshow).format('DD') + ` ${MONTH[Number(moment(dateshow).format('M')) - 1]} ` + YearTH
      }
      return ''
    },
    toFullDateShortMonth: (dateshow, locale = 'th') => {
      const YearTH = `${Number(moment(dateshow).format('YYYY')) + 543}`
      const month = moment()
        .locale(locale)
        .month(Number(moment(dateshow).format('M')) - 1)
        .format('MMM') // 'มิ.ย.'

      if (dateshow) {
        return moment(dateshow).format('DD') + ` ${month} ` + YearTH
      }
      return ''
    }
  },
  DATE_ONLY: {
    formatDateOnly: isoDateString => {
      const date = new Date(isoDateString)
      const day = String(date.getDate()).padStart(2, '0')
      const month = String(date.getMonth() + 1).padStart(2, '0') // เดือนเริ่มจาก 0
      const year = date.getFullYear()
      return `${day}-${month}-${year}`
    }
  },
  FORMAT: {
    TEL: (txt = '') => {
      return txt.replace(/^(\d{3})(\d{3})(\d{4})$/, '$1-$2-$3')
    },
    TelToNumber: (txt = '') => {
      return txt.replace(/-/g, '')
    },
    money: (txt = 0) => {
      return parseFloat(txt).toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })
    }
  },
  SORT: {
    compare: (a, b, key) => {
      if (_.get(a, key) < _.get(b, key)) {
        return -1
      }
      if (_.get(a, key) > _.get(b, key)) {
        return 1
      }
      return 0
    }
  },
  IMAGE: {
    async toImageSmall(fileBase64) {
      async function reduce_image_file_size(base64Str, MAX_WIDTH = 900, MAX_HEIGHT = 900) {
        let resized_base64 = await new Promise(resolve => {
          let img = new Image()
          img.src = base64Str
          img.onload = () => {
            let canvas = document.createElement('canvas')
            let width = img.width
            let height = img.height

            if (width > height) {
              if (width > MAX_WIDTH) {
                height *= MAX_WIDTH / width
                width = MAX_WIDTH
              }
            } else {
              if (height > MAX_HEIGHT) {
                width *= MAX_HEIGHT / height
                height = MAX_HEIGHT
              }
            }
            canvas.width = width
            canvas.height = height
            let ctx = canvas.getContext('2d')
            ctx.drawImage(img, 0, 0, width, height)
            resolve(canvas.toDataURL()) // this will return base64 image results after resize
          }
        })
        return resized_base64
      }

      async function image_to_base64(file) {
        let result_base64 = await new Promise(resolve => {
          let fileReader = new FileReader()
          fileReader.onload = e => resolve(fileReader.result)
          fileReader.onerror = error => {
            console.log(error)
            alert('An Error occurred please try again, File might be corrupt')
          }
          fileReader.readAsDataURL(file)
        })
        return result_base64
      }

      async function process_image(file, min_image_size = 300) {
        // const res = await image_to_base64(file);
        const res = file
        if (res) {
          const old_size = calc_image_size(res)
          if (old_size > min_image_size) {
            const resized = await reduce_image_file_size(res)
            const new_size = calc_image_size(resized)
            console.log('new_size=> ', new_size, 'KB')
            console.log('old_size=> ', old_size, 'KB')
            return resized
          } else {
            console.log('image already small enough')
            return res
          }
        } else {
          console.log('return err')
          return null
        }
      }

      /*- NOTE: USE THIS JUST TO GET PROCESSED RESULTS -*/
      // async function preview_image() {
      //     console.log('00')
      //     const file = document.getElementById('file');
      //     const image = await process_image(file.files[0]);
      //     console.log('image >>', image)
      // }

      function calc_image_size(image) {
        let y = 1
        if (image.endsWith('==')) {
          y = 2
        }
        const x_size = image.length * (3 / 4) - y
        return Math.round(x_size / 1024)
      }

      return new Promise(async resolve => {
        // const file = document.getElementById('file');
        // const image = await process_image(file.files[0]);
        const tmpBase64 = `data:image/jpeg;base64,${fileBase64}`
        let imageResize = await process_image(tmpBase64)
        console.log('imageResize >>', imageResize)
        // imageResize = `${imageResize}`.replace('data:image/png;base64,','')
        resolve(imageResize)
      })
    }
  },
  Auth: {
    isLogin: async () => {
      const res = await fetch('/api/auth/islogin', { cache: 'no-store' })
      const data = await res.json()
      const isLogin = data?.isLogin ?? false
      console.log('🚀 ~ isLogin: ~ isLogin:', isLogin)
      return isLogin
    },
    Logout: async () => {
      console.log('FN Logout RUN')
      try {
        sessionStorage.clear()
        localStorage.clear()
        localStorage.removeItem('token')
        const res = await fetch('/api/auth/logout', { method: 'POST' })
        const data = await res.json()
        console.info('Logout DONE:')
      } catch (error) {
        console.error('Logout failed:', error)
      }
    },
    setToken: token => {
      localStorage.setItem('token', token)
    },
    getToken: () => {
      try {
        if (typeof window === 'undefined') return null
        const raw = localStorage.getItem('token')
        if (!raw) return null
        return `Bearer ${raw}`
      } catch (e) {
        return null
      }
    },
    getBearerToken: () => {
      try {
        if (typeof window === 'undefined') return null
        const raw = localStorage.getItem('token')
        if (!raw) return null
        return `Bearer ${raw}`
      } catch (e) {
        return null
      }
    },
    getLang: () => {
      let lang = null
      if (lang) {
        return `${lang}`
      }
      return 'th'
    }
    // getTokenData: () => {
    //   try {
    //     let mytoken = null;
    //     const decode = jwt_decode(mytoken);
    //     return decode;
    //   } catch (e) {
    //     return {};
    //   }
    // },
  },
  FNFORM: {
    getObjectValue: (options = [], keyId) => {
      return options.find(item => item.id == keyId)
    },
    handleNumberOnly: e => {
      const numericValue = e.target.value.replace(/[^0-9]/g, '')
      e.target.value = numericValue
    },
    handleGPAInput: e => {
      let value = e.target.value
      let previousValue = e.target.getAttribute('data-previous-value') || ''

      // อนุญาตเฉพาะตัวเลขและจุดทศนิยม
      value = value.replace(/[^0-9.]/g, '')

      // ตรวจสอบว่ามีจุดทศนิยมเกิน 1 จุดหรือไม่
      const parts = value.split('.')
      if (parts.length > 2) {
        value = parts[0] + '.' + parts.slice(1).join('')
      }

      // ถ้าพิมพ์ตัวแรกเป็นตัวเลข ให้เติม "." อัตโนมัติ (แต่ให้ลบได้)
      if (value.length === 1 && /^[0-9]$/.test(value)) {
        if (e.inputType !== 'deleteContentBackward' && !previousValue.endsWith('.')) {
          value += '.'
        }
      }

      // ถ้าผู้ใช้ลบจนเหลือ "." อย่างเดียว ให้ล้างเป็นค่าว่าง
      if (value === '.') {
        value = ''
      }

      // จำกัดให้มีทศนิยมไม่เกิน 2 ตำแหน่ง
      if (parts.length === 2) {
        value = parts[0] + '.' + parts[1].slice(0, 2)
      }

      // ตรวจสอบว่าเกรดไม่เกิน 4.00
      let numericValue = parseFloat(value)
      if (!isNaN(numericValue) && numericValue > 4.0) {
        value = '4.00' // ถ้ามากกว่า 4.00 ให้กำหนดเป็น 4.00
      }

      e.target.value = value
      e.target.setAttribute('data-previous-value', value)
    },
    handleGPAOnBlur: e => {
      let value = e.target.value

      // ถ้าไม่ใช่ค่าว่าง ให้เติมทศนิยมให้ครบ 2 ตำแหน่ง
      if (value !== '') {
        value = parseFloat(value).toFixed(2)
      }

      e.target.value = value
    },
    handleCheckBox: (mainId, listId, state) => {
      let _state = _.cloneDeep(state)
      if (_state[mainId]) {
        if (_state[mainId].includes(listId)) {
          _state[mainId] = _state[mainId].filter(item => item !== listId)
          if (_state[mainId].length === 0) {
            delete _state[mainId]
          }
        } else {
          _state[mainId].push(listId)
        }
      } else {
        _state[mainId] = [listId]
      }
      return _state
    },
    handleCharOnly: e => {
      // const charValue = e.target.value.replace(/[^@_.0-9a-zA-Zก-์]/g, "");
      const charValue = e.target.value.replace(/[^\s@_.a-zA-Z0-9ก-์]/g, '')
      e.target.value = charValue
    },
    handleCharEngOnly: e => {
      const charValue = e.target.value.replace(/[^\s@_.a-zA-Z0-9]/g, '')
      e.target.value = charValue
    },
    handleEngCharOnly: e => {
      // const charValue = e.target.value.replace(/[^@_.0-9a-zA-Zก-์]/g, "");
      const charValue = e.target.value.replace(/[a-zA-Z\s]/g, '')
      e.target.value = charValue
    },
    isUpperCase: e => {
      const charEng = e.target.value.replace(/[^\s@_.a-zA-Z0-9]/g, '')
      const charValue = charEng.toUpperCase()
      e.target.value = charValue
    },

    idCardCheck: idCardNumber => {
      let sum = 0
      for (let i = 0; i < idCardNumber.length - 1; i++) {
        sum += parseInt(idCardNumber[i]) * (13 - i)
      }

      let checkDigit = (11 - (sum % 11)) % 10

      if (checkDigit == idCardNumber[12]) {
        return true
      } else {
        return false
      }
    },
    handleNumberMoneyOnly: e => {
      let rawValue = e.target.value.replace(/,/g, '')
      if (/^\d*$/.test(rawValue)) {
        e.target.value = new Intl.NumberFormat().format(rawValue)
      } else {
        e.target.value = e.target.value.slice(0, -1)
      }
      return e
    }
  },
  LANG: {
    getLang: () => {
      let myCookie = Cookies.get('NEXT_LOCALE') || Cookies.get('APP_LOCALE')
      return myCookie || 'th'
    }
  },
  FNFILE: {
    getImageDimensions: async file => {
      return new Promise((resolve, reject) => {
        const reader = new FileReader()
        reader.onload = e => {
          const img = new Image()
          img.onload = () => {
            resolve({ width: img.width, height: img.height })
          }
          img.onerror = reject
          img.src = e.target.result
        }
        reader.onerror = reject
        reader.readAsDataURL(file)
      })
    }
  }
}
function getCookie(name) {
  const cookies = document.cookie.split('; ')
  for (let cookie of cookies) {
    let [key, value] = cookie.split('=')
    if (key === name) return value
  }
  return null
}
