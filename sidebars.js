// @ts-check

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.

 @type {import('@docusaurus/plugin-content-docs').SidebarsConfig}
 */
module.exports = {
  tutorialSidebar:[
    "intro",
    {
      type: 'category',
      label: 'Nc2 Labs',
      items: [
              {
                type: 'category',
                label: 'Migrate to Nutanix',
                items: ['Migrate/overview',
                        'Migrate/envdetails'],
              },
              {
                type: 'category',
                label: 'Setting up the Environment',
                items: ['SetEnv/overview',
                        'SetEnv/categoryandpolicy',
                        'SetEnv/policy',
                        'SetEnv/playbook',
                        'SetEnv/setuptakeaway'],
              },
              {
                type: 'category',
                label: 'Migrating Workloads',
                items: ['MigrateWLs/overview',
                        'MigrateWLs/setupmove',
                        'MigrateWLs/migratingvm',
                        'MigrateWLs/migrateplan',
                        'MigrateWLs/migratevm'],                        
              },
              {
                type: 'category',
                label: 'Advanced VM Migration',
                items: ['AdvMigrate/advancedmigrate',
                        'AdvMigrate/expadvplan',
                        'AdvMigrate/migratevm',
                        'AdvMigrate/migratescale',
                        'AdvMigrate/migratetakeaway'],
              },
              {
                type: 'category',
                label: 'Day 2 Management',
                items: ['Day2/overview',
                        'Day2/ngt',
                        'Day2/iam',
                        'Day2/reports',
                        'Day2/capacityp',
                        'Day2/vmdetect',
                        'Day2/mgmttakeaway'],
              },
              {
                type:  'category',
                label: 'Nutanix Disaster Recovery',
                items: ['DR/overview',
                        'DR/clustersetup',
                        'DR/protectp',
                        'DR/recoveryp',
                        'DR/testrp',
                        'DR/takeaway'],
              },   
      ]
    },
  ]
};