# Fraud-Detection-Dataflow

Batch dataflow pipeline project for fraud detection using a banking transaction dataset. Leverages Google Cloud Storage and BigQuery to analyze transactional behavior, identify anomalies, and provide insights for financial security. Includes a JavaScript transformation function for data parsing.

## Overview

This project demonstrates a complete data pipeline for detecting fraudulent transactions using Google Cloud Dataflow, leveraging a detailed bank transaction dataset. The dataset contains 2,512 samples of financial transaction data, including transaction behavior, customer demographics, and usage patterns. The goal of this pipeline is to identify potential fraudulent activity and anomalies in transactional behavior, which is critical for building predictive models for financial security.

## Project Components

- **Dataset**: Bank transaction data used for fraud detection, including attributes such as transaction amount, type, date, customer details, device used, and transaction channel.
- **Dataflow Pipeline**: A Google Cloud Dataflow job that processes the dataset and loads the cleaned data into BigQuery for further analysis.
- **Transformation**: A JavaScript function (`transform.js`) used for data transformation before loading it into BigQuery.

## Features

- **Bank Transaction Dataset**: Contains various fields like TransactionID, AccountID, TransactionAmount, TransactionDate, Location, MerchantID, AccountBalance, etc.
- **BigQuery Integration**: Data is loaded into BigQuery for subsequent analysis and machine learning model training.
- **Dataflow Pipeline**: A batch job that extracts data from CSV, applies transformations, and loads the data into BigQuery.

## Project Details

### Dataset

- **Dataset Title**: Bank Transaction Dataset for Fraud Detection
- **Dataset Size**: 2,512 samples of transaction data
- **Key Attributes**: TransactionID, AccountID, TransactionAmount, TransactionDate, TransactionType, Location, DeviceID, IPAddress, MerchantID, AccountBalance, PreviousTransactionDate, Channel, CustomerAge, CustomerOccupation, TransactionDuration, LoginAttempts

### Technical Details

- **Job Name**: bank-tran
- **Job ID**: 2024-12-18_02_45_22-10859525783347979541
- **Job Type**: Batch
- **Job Status**: Succeeded
- **SDK Version**: Apache Beam SDK for Java 2.61.0
- **Job Region**: us-east1
- **Elapsed Time**: 4 min 19 sec

### Resource Metrics

- **Total vCPU Time**: 0.097 vCPU hr
- **Total Memory Time**: 0.364 GB hr
- **Total HDD PD Time**: 2.429 GB hr
- **Billable Shuffle Data Processed**: 865 B

### Pipeline Options

- **Input File Pattern**: gs://qwiklabs-gcp-01-109d078d57d4/bank_data.csv
- **JavaScript Transform Function**: transform
- **Output Table**: qwiklabs-gcp-01-109d078d57d4:bank_transaction.transactions

## Usage Instructions

- Detecting fraudulent transaction patterns
- Building predictive models for transaction risk assessment
- Analyzing consumer spending habits and financial behaviors

## About the Dataset

The data is generated based on simulated transaction behavior to represent a wide variety of banking scenarios. It is ideal for data scientists, financial analysts, and researchers looking to analyze transactional patterns, detect fraud, and build predictive models for financial security applications.

## Screenshots

Here are the various steps and screenshots showcasing the project:

## Screenshots

## Screenshots

1. ![Kaggle Dataset Download](https://github.com/Deepak-Mishra815/fraud-detection-dataflow/raw/main/Kaggle_dataset_download.png)


## Conclusion

This project provides a powerful framework for processing and analyzing bank transaction data to detect fraudulent activities. By leveraging Google Cloud Dataflow and BigQuery, it is possible to process large datasets, automate data transformations, and create real-time fraud detection systems.

Feel free to use this pipeline as a template for similar projects or enhance it further based on your needs.
