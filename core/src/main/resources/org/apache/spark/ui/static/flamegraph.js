/*
 * Licensed to the Apache Software Foundation (ASF) under one or more
 * contributor license agreements.  See the NOTICE file distributed with
 * this work for additional information regarding copyright ownership.
 * The ASF licenses this file to You under the Apache License, Version 2.0
 * (the "License"); you may not use this file except in compliance with
 * the License.  You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/* global d3, flamegraph */

/* eslint-disable no-unused-vars */
function drawFlamegraph() {
  const width = (window.innerWidth * 95) / 100;
  const chart = flamegraph()
    .width(width)
    .cellHeight(18)
    .transitionEase(d3.easeCubic)
    .sort(true)
    .title("");
  const jsonStr = d3.select("#executor-flamegraph-data").text().trim()
  const jsonData = JSON.parse(jsonStr);
  d3.select("#executor-flamegraph-chart")
		.datum(jsonData)
    .call(chart);
  window.onresize = () => chart.width(width);
}
/* eslint-enable no-unused-vars */
