import React, { useContext, useEffect, useState } from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import { Context } from "../context/Context";
import "../style/chart.css";

export default function Chart() {
  const { setFinances, finances, url, setShowChart, setShowForm } =
    useContext(Context);
  const [chartOptions, setChartOptions] = useState(null);

  const fetchFinances = async () => {
    try {
      const response = await fetch(url);
      const data = await response.json();

      setFinances(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchFinances();
  }, []);

  useEffect(() => {
    if (finances) {
      const categoryTotals = finances.reduce((acc, expense) => {
        if (!acc[expense.category]) {
          acc[expense.category] = 0;
        }
        acc[expense.category] += expense.price;
        return acc;
      }, {});

      const categories = Object.keys(categoryTotals);
      const expensesData = Object.values(categoryTotals);

      const generatedColors = Highcharts.getOptions().colors.slice(
        0,
        categories.length
      );
      const categoryToColor = {};

      categories.forEach((category, index) => {
        categoryToColor[category] = generatedColors[index];
      });

      const seriesData = categories.map((category) => ({
        name: category,
        y: categoryTotals[category],
        color: categoryToColor[category],
      }));

      const updatedChartOptions = {
        chart: {
          type: "column",
        },
        title: {
          text: "Budget overview",
        },
        xAxis: {
          categories: categories,
        },
        series: [
          {
            name: "Expenses",
            data: seriesData,
          },
        ],
        credits: {
          enabled: false,
        },
      };

      setChartOptions(updatedChartOptions);
    }
  }, [finances]);

  return (
    <div className="row">
      <div className="section box col-md-6">
        <div className="section-content">
          {chartOptions && (
            <HighchartsReact highcharts={Highcharts} options={chartOptions} />
          )}
        </div>
      </div>
      <button
        className="close-overview"
        onClick={() => {
          setShowChart(false);
          setShowForm(true);
        }}
      >
        Close overview
      </button>
    </div>
  );
}
