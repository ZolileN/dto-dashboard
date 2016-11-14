/**
 * Widget meta data
 *
 * @access
 * metadata[widget.type][widget.units]
 *
 */
const metadata = {
  'full': {
    'n': {
      label: 'Key performance indicators',
      widget_help: 'The 4 key performance indicators are required by the Digital Service Standard. They appear at the top of your service dashboard. Enter your data in the fields below.',
      widget_form_help: ''
    }
  },
  'bar': {
    'n': {
      label: '',
      widget_help: 'This is represented as a single-point bar chart. Enter your data in the fields below.',
      widget_form_help: `These figures are numerical. You can include up to 2 decimal places.`
    },
    's': {
      label: '',
      widget_help: 'This is represented as a single-point bar chart. Enter your data in the fields below.',
      widget_form_help: `Enter figures in seconds. For example, 5 hours 2 minutes 35 seconds = 18,155 seconds. It will show on your chart in hours, minutes and seconds.`
    },
    '%': {
      label: '',
      widget_help: '',
      widget_form_help: `These figures are percentages and can’t add up to more than 100. You can include up to 2 decimal places — for example, 32.25.`
    }
  },
  'fact': {
    'n': {
      label: '',
      widget_help: '',
      widget_form_help: ''
    }
  },
  'line': {
    'n': {
      label: '',
      widget_help: `This is represented as a single-line chart. Enter your data in the fields below.`,
      widget_form_help: ''
    },
    's': {
      label: '',
      widget_help: `This is represented as a single-line chart. Enter your data in the fields below.`,
      widget_form_help: `Enter figures in seconds. For example, 5 hours 2 minutes 35 seconds = 18,155 seconds. It will show on your chart in hours, minutes and seconds.`
    },
    '%': {
      label: '',
      widget_help: `This is represented as a single-line chart. Enter your data in the fields below.`,
      widget_form_help: ''
    }
  },
  'sparkline': {
    '%': {
      label: '',
      widget_help: '',
      widget_form_help: ''
    },
    'n': {
      label: '',
      widget_help: '',
      widget_form_help: ''
    }
  },
  'kpi-sparkline': {
    '%': {
      label: '',
      widget_help: '',
      widget_form_help: `This figure is a percentage and can't be more than 100. You can include up to 2 decimal places — for example, 32.25.`
    },
    '$': {
      label: '',
      widget_help: '',
      widget_form_help: `This figure is in dollars. You can include up to 2 decimal places — for example, 32.25.`
    }
  },
  'pie': {
    '%': {
      label: '',
      widget_help: `This is represented as a pie chart. Enter your data in the fields below.`,
      widget_form_help: 'These figures are percentages and can’t add up to more than 100. You can include up to 2 decimal places — for example, 32.25. You can have up to 6 sets of figures.'
    }
  }
};

export default metadata;
