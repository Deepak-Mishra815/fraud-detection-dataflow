# fraud-detection-dataflow
Batch dataflow pipeline project for fraud detection using a banking transaction dataset. Leverages Google Cloud Storage and BigQuery to analyze transactional behavior, identify anomalies, and provide insights for financial security. Includes a JavaScript transformation function for data parsing

Bank Transaction Dataset for Fraud Detection: Dataflow Pipeline Project

Overview

This project demonstrates a complete data pipeline for detecting fraudulent transactions using Google Cloud Dataflow, leveraging a detailed bank transaction dataset. The dataset contains 2,512 samples of financial transaction data, including transaction behavior, customer demographics, and usage patterns. The goal of this pipeline is to identify potential fraudulent activity and anomalies in transactional behavior, which is critical for building predictive models for financial security.

Project Components

Dataset: Bank transaction data used for fraud detection, including attributes such as transaction amount, type, date, customer details, device used, and transaction channel.
Dataflow Pipeline: A Google Cloud Dataflow job that processes the dataset and loads the cleaned data into BigQuery for further analysis.
Transformation: A JavaScript function (transform.js) used for data transformation before loading it into BigQuery.

Features

Bank Transaction Dataset: Contains various fields like TransactionID, AccountID, TransactionAmount, TransactionDate, Location, MerchantID, AccountBalance, etc.
BigQuery Integration: Data is loaded into BigQuery for subsequent analysis and machine learning model training.
Dataflow Pipeline: A batch job that extracts data from CSV, applies transformations, and loads the data into BigQuery.

Project Details

Dataset

Dataset Title: Bank Transaction Dataset for Fraud Detection

Dataset Size: 2,512 samples of transaction data

Key Attributes: TransactionID, AccountID, TransactionAmount, TransactionDate, TransactionType, Location, DeviceID, IPAddress, MerchantID, AccountBalance, PreviousTransactionDate, Channel, CustomerAge, CustomerOccupation, TransactionDuration, LoginAttempts

Technical Details

Job Name: bank-tran

Job ID: 2024-12-18_02_45_22-10859525783347979541

Job Type: Batch

Job Status: Succeeded

SDK Version: Apache Beam SDK for Java 2.61.0

Job Region: us-east1

Elapsed Time: 4 min 19 sec

Resource Metrics:

Total vCPU Time: 0.097 vCPU hr

Total Memory Time: 0.364 GB hr

Total HDD PD Time: 2.429 GB hr

Billable Shuffle Data Processed: 865 B

Pipeline Options

Input File Pattern: gs://qwiklabs-gcp-01-109d078d57d4/bank_data.csv

JavaScript Transform Function: transform

Output Table: qwiklabs-gcp-01-109d078d57d4:bank_transaction.transactions

JavaScript Transformation Function

Here is the JavaScript function used to transform the data:

function transform(line) {
  try {
    // Split the line by commas into an array
    var values = line.split(',');

    // Check if the line is a header row
    if (values[0].trim() === 'TransactionID') {
      return; // Skip the header row
    }

    // Create a new empty object
    var obj = new Object();

    // Map values to object properties dynamically
    obj.TransactionID = values[0].trim();
    obj.AccountID = values[1].trim();
    obj.TransactionAmount = values[2].trim() === '' ? null : parseFloat(values[2].trim());
    obj.TransactionDate = values[3].trim() === '' ? null : new Date(values[3].trim()).toISOString();
    obj.TransactionType = values[4].trim();
    obj.Location = values[5].trim();
    obj.DeviceID = values[6].trim();
    obj.IPAddress = values[7].trim();
    obj.MerchantID = values[8].trim();
    obj.Channel = values[9].trim();
    obj.CustomerAge = values[10].trim() === '' ? null : parseInt(values[10].trim());
    obj.CustomerOccupation = values[11].trim();
    obj.TransactionDuration = values[12].trim() === '' ? null : parseInt(values[12].trim());
    obj.LoginAttempts = values[13].trim() === '' ? null : parseInt(values[13].trim());
    obj.AccountBalance = values[14].trim() === '' ? null : parseFloat(values[14].trim());
    obj.PreviousTransactionDate = values[15].trim() === '' ? null : new Date(values[15].trim()).toISOString();

    // Return the object as a JSON string
    var jsonString = JSON.stringify(obj);
    return jsonString;
  } catch (error) {
    // Remove the console.error statement
    return null;
  }
}

Usage Instructions

Detecting fraudulent transaction patterns

Building predictive models for transaction risk assessment

Analyzing consumer spending habits and financial behaviors

About the Dataset

The data is generated based on simulated transaction behavior to represent a wide variety of banking scenarios. It is ideal for data scientists, financial analysts, and researchers looking to analyze transactional patterns, detect fraud, and build predictive models for financial security applications.

Screenshots

Here are the various steps and screenshots showcasing the project:

Kaggle_dataset_download.png

Dataflow_Pipeline.Create_bucket_CS.jpg

Dataflow_Pipeline.Choose_the_unique_bucket_name.jpg

Dataflow_Pipeline.Clicked_Create_button_CS_bucket.jpg

Dataflow_Pipeline.Choose_the_upload_option.jpg

Dataflow_Pipeline.Files_uploaded_CS.jpg

Dataflow_Pipeline.Create_a_dataset_in_BigQuery.jpg

Dataflow_pipeline_clicked_dataset_creation.jpg

Dataflow_Pipeline.dataset_created.jpg

Dataflow_Pipeline.Created_table_in_the_dataset.jpg

Dataflow_Pipeline.Table_created.jpg

Dataflow_Pipeline.Choose_bank_data_csv_file.jpg

Dataflow_Pipeline.Schema_detection_file_upload.jpg

Dataflow_Pipeline.Select_the_biqquery_table.jpg

Dataflow_Pipeline.Select_the_temp_directory_location.jpg

Dataflow_Pipeline.Choose_temporary_location.jpg

Dataflow_Pipeline_Job_Creation_Started.jpg

Dataflow_Pipeline.Job_created_loaded_bigquery.jpg

Dataflow_Pipeline.Dataloaded_in_BigQuery.jpg

Dataflow_Pipeline.Complete_data_loaded_information.jpg

Dataflow_Pipeline.Select_dataflow_api.jpg

Dataflow_Pipeline.Disabled_Dataflow_API.jpg

Dataflow_Pipeline.Disabled_Dataflow_API_button.jpg

Dataflow_Pipeline.Select_dataflow_api_enabled_button_again.jpg

Dataflow_Pipeline.Select_dataflow.jpg

Dataflow_Pipeline.Select_dataflow_template.jpg

Dataflow_Pipeline.Select_template_CS_to_BigQuery.jpg

Dataflow_Pipeline.Select_region_template_&_name.jpg



Conclusion

This project provides a powerful framework for processing and analyzing bank transaction data to detect fraudulent activities. By leveraging Google Cloud Dataflow and BigQuery, it is possible to process large datasets, automate data transformations, and create real-time fraud detection systems.

Feel free to use this pipeline as a template for similar projects or enhance it further based on your needs.

