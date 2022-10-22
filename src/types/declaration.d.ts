declare module '*.css' {
  interface ClassNames {
    [className: string]: string
  }
  const classNames: ClassNames
  export default classNames
}

declare type Svg = React.FunctionComponent<React.SVGAttributes<SVGElement>>

declare module '*.svg' {
  const content: any
  export default content
}
