// import React from 'react';
// import { View, ViewStyle } from 'react-native';
// import Svg, { Defs, LinearGradient, Polygon, Stop } from 'react-native-svg';

// export function CompanyLogo({
//   size = 220,
//   style,
// }: {
//   size?: number;
//   style?: ViewStyle;
// }) {
//   return (
//     <View style={[{ width: size, height: size }, style]}>
//       <Svg width="100%" height="100%" viewBox="0 0 600 500" role="img" aria-label="Mbhombi logo">
//         <Defs>
//           <LinearGradient id="leftTop" x1="0" y1="0" x2="1" y2="1">
//             <Stop offset="0" stopColor="#ff5f8a" />
//             <Stop offset="0.5" stopColor="#d9144f" />
//             <Stop offset="1" stopColor="#8d0138" />
//           </LinearGradient>
//           <LinearGradient id="leftBottom" x1="0" y1="0" x2="1" y2="1">
//             <Stop offset="0" stopColor="#a60a3d" />
//             <Stop offset="0.5" stopColor="#6d0029" />
//             <Stop offset="1" stopColor="#3b0014" />
//           </LinearGradient>
//           <LinearGradient id="rightTop" x1="1" y1="0" x2="0" y2="1">
//             <Stop offset="0" stopColor="#ff638d" />
//             <Stop offset="0.5" stopColor="#d9144f" />
//             <Stop offset="1" stopColor="#8d0138" />
//           </LinearGradient>
//           <LinearGradient id="rightBottom" x1="1" y1="0" x2="0" y2="1">
//             <Stop offset="0" stopColor="#a60a3d" />
//             <Stop offset="0.5" stopColor="#6d0029" />
//             <Stop offset="1" stopColor="#3b0014" />
//           </LinearGradient>
//           <LinearGradient id="centerFill" x1="0" y1="0" x2="1" y2="1">
//             <Stop offset="0" stopColor="#ff5a85" />
//             <Stop offset="0.5" stopColor="#c70f4f" />
//             <Stop offset="1" stopColor="#810327" />
//           </LinearGradient>
//           <LinearGradient id="edge" x1="0" y1="0" x2="1" y2="0">
//             <Stop offset="0" stopColor="#f9f9f9" />
//             <Stop offset="0.2" stopColor="#d9d9d9" />
//             <Stop offset="0.5" stopColor="#8b8b8b" />
//             <Stop offset="0.8" stopColor="#f5f5f5" />
//             <Stop offset="1" stopColor="#9d9d9d" />
//           </LinearGradient>
//         </Defs>

//         <Polygon
//           points="68,434 200,72 278,72 162,434"
//           fill="url(#leftTop)"
//           stroke="url(#edge)"
//           strokeWidth="12"
//           strokeLinejoin="round"
//         />
//         <Polygon
//           points="162,434 278,72 338,72 236,434"
//           fill="url(#leftBottom)"
//           stroke="url(#edge)"
//           strokeWidth="12"
//           strokeLinejoin="round"
//         />
//         <Polygon
//           points="236,434 338,72 402,72 318,434"
//           fill="url(#centerFill)"
//           stroke="url(#edge)"
//           strokeWidth="12"
//           strokeLinejoin="round"
//         />
//         <Polygon
//           points="318,434 402,72 482,72 362,434"
//           fill="url(#rightTop)"
//           stroke="url(#edge)"
//           strokeWidth="12"
//           strokeLinejoin="round"
//         />
//         <Polygon
//           points="362,434 482,72 532,72 442,434"
//           fill="url(#rightBottom)"
//           stroke="url(#edge)"
//           strokeWidth="12"
//           strokeLinejoin="round"
//         />
//       </Svg>
//     </View>
//   );
// }
