/** @[중요] 외부라이브러리 사용흐름
 * 1. REF 설정 <canvas ref={ref => (this.canvas = ref)} />
 * 2. 차트 인스턴스를  생성하는 Draw()라는 함수를 생성, 컴포넌트가 마운트될 때 호출  componentDidMount() {this.draw()};
 * 3. 업데이트 될때도 조건부로 인스턴스를 제거시키고 새로 생성
 *    componentDidUpdate(prevProps, prevState) {
 *     if (prevProps.data !== this.props.data) {
 *       this.draw();
 *     }
 *   }
 * 4. 컴포넌트가 언마운트 될때 차트 인스턴스를 제거
 * componentWillUnmount() {
 *     // 컴포넌트가 사라질 때 인스턴스 제거
 *     if (this.chart) {
 *       this.chart.destroy();
 *     }
 *   }
 */


import React, { Component } from "react";
import Chart from "chart.js";
import "./LineChart.css";

class LineChart extends Component {

    chart = null;

    draw() {
        // 새로 그려질 때 기존 인스턴스 제거
        if (this.chart) {
            this.chart.destroy();
            this.chart = null;
        }

        const { data, pair } = this.props;

        const config = {
            type: "line",
            data: {
                labels: data.map(d => d.date),
                datasets: [
                    {
                        label: "price",
                        data: data.map(d => d.value),
                        fill: false,
                        backgroundColor: 'blue',
                        borderColor: 'blue',
                        lineTension: 0,
                        pointRadius: 0,
                    }
                ]
            },
            options: {
                responsive: true,
                title: {
                    display: true,
                    text: `${pair} 24hr Chart`
                },
                tooltips: {
                    mode: "index",
                    intersect: false
                },
                hover: {
                    mode: "nearest",
                    intersect: true
                }
            }
        };

        const ctx = this.canvas.getContext("2d");
        this.chart = new Chart(ctx, config);
    }

    componentDidMount() {
        this.draw();
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.data !== this.props.data) {
            this.draw();
        }
    }

    componentWillUnmount() {
        // 컴포넌트가 사라질 때 인스턴스 제거
        if (this.chart) {
            this.chart.destroy();
        }
    }


    render() {
        return (
            <div className="LineChart">
                {/*
          ref 를 통해서 실제 DOM 에 대한 접근
        */}
                <canvas ref={ref => (this.canvas = ref)} />
            </div>
        );
    }
}

export default LineChart;