export type SurfaceStyle = {
  strokeColor: string
  fillColor: string
}

const surfaceStyleA: SurfaceStyle = {
  strokeColor: '#00a63c',
  fillColor: '#00a63c'
}

const surfaceStyleB: SurfaceStyle = {
  strokeColor: '#00a63c',
  fillColor: '#00a63c'
}

const surfaceStyleC: SurfaceStyle = {
  strokeColor: '#00a63c',
  fillColor: '#00a63c'
}

export function getGraphSeriesStyle(seriesLength: number) {
  switch (seriesLength) {
    case 1:
      return [surfaceStyleB]
    case 2:
      return [surfaceStyleA, surfaceStyleC]
    default:
      return [surfaceStyleA, surfaceStyleB, surfaceStyleC]
  }
}
