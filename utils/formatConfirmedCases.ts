type DataType = {
  検査実施人数: number
  陽性患者数: number
  入院中: number
  退院: number
  死亡: number
}

type ConfirmedCasesType = {
  検査実施人数: number
  陽性患者数: number
  入院中: number
  退院: number
  死亡: number
}

/**
 * Format for *Chart component
 *
 * @param data - Raw data
 */
export default (data: DataType) => {
  const formattedData: ConfirmedCasesType = {
    検査実施人数: data['検査実施人数'],
    陽性患者数: data['陽性患者数'],
    入院中: data['入院中'],
    退院: data['退院'],
    死亡: data['死亡']
  }
  return formattedData
}
