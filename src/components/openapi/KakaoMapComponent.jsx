import { useEffect, useRef } from "react"

const KakaoMapComponent = ({lat, lng}) => {
    const mapRef = useRef(null);

    useEffect(() => {
        if (!lat || !lng) {
            return;
        }
        
        const {kakao} = window;

        // 지도를 표시할 div DOM 요소를 가져온다.
        const mapContainer = mapRef.current;

        // 지도 중심 좌표
        const position = new kakao.maps.LatLng(
            Number(lat),
            Number(lng),
        );

        // 지도 옵션
        const mapOption = {
            center: position,
            level: 3,
        };

        // 지도 생성
        const map = new kakao.maps.Map(
            mapContainer,
            mapOption,
        );

        // 마커 생성
        const marker = new kakao.maps.Marker({
            position
        });

        // 지도에 마커 표시
        marker.setMap(map);
    }, [lat, lng]);
  return (
    <div ref={mapRef} style={{width: "100%", height: "400px"}}></div>

  )
}

export default KakaoMapComponent