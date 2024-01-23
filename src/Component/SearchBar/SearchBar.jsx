import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import DatePicker from 'react-datepicker';
import * as Yup from 'yup';
import './SearchBar.css';
import { addDays } from 'date-fns';
import { Link } from 'react-router-dom';


// const validationSchema = Yup.object().shape({
//   checkinDate: Yup.date().required('Check-In Date is required')
//     .test('checkInBeforeCheckout', 'Check-in date must be before the check-out date',
//       function (checkinDate) {
//         const { checkoutDate } = this.parent;
//         if (checkinDate && checkoutDate) {
//           return new Date(checkinDate) < new Date(checkoutDate);
//         }
//         return true;
//       }),
//   checkoutDate: Yup.date().required('Check-Out Date is required')
//     .test('checkInBeforeCheckout', 'Check-out date must be after the check-in date',
//       function (checkoutDate) {
//         const { checkinDate } = this.parent;
//         if (checkinDate && checkoutDate) {
//           return new Date(checkoutDate) > new Date(checkinDate);
//         } return true;
//       }),
//   guestCount: Yup.number()
//     .typeError('Number of Guests must be a number')
//     .positive('Number of Guests must be a positive number')
//     .required('Number of Guests is required'),
// });

// const validationSchema = Yup.object().shape({
//   checkinDate: Yup.date().required('Check-In Date is required'),
//   checkoutDate: Yup.date().required('Check-Out Date is required')
//     .when('checkinDate', (checkinDate, schema) => {
//       return schema.test('checkInBeforeCheckout', 'Check-out date must be after the check-in date',
//         function (checkoutDate) {
//           if (checkinDate && checkoutDate) {
//             return new Date(checkoutDate) > new Date(checkinDate);
//           }
//           return true;
//         });
//     }),
//   guestCount: Yup.number()
//     .typeError('Number of Guests must be a number')
//     .positive('Number of Guests must be a positive number')
//     .required('Number of Guests is required'),
// });

// const validationSchema = Yup.object().shape({
//   checkinDate: Yup.date().required('Check-In Date is required'),
//   checkoutDate: Yup.date().required('Check-Out Date is required')
//     .when('checkinDate', (checkinDate, schema) => {
//       return schema.test('checkOutAfterCheckIn', 'Check-out date must be after the check-in date',
//         function (checkoutDate) {
//           if (checkinDate && checkoutDate) {
//             return new Date(checkoutDate) > new Date(checkinDate);
//           }
//           return true;
//         });
//     }),
//   guestCount: Yup.number()
//     .typeError('Number of Guests must be a number')
//     .positive('Number of Guests must be a positive number')
//     .required('Number of Guests is required'),
// });
const validationSchema = Yup.object().shape({
  checkinDate: Yup.date().required('Check-In Date is required'),
  checkoutDate: Yup.date().required('Check-Out Date is required')
    .when('checkinDate', (checkinDate, schema) => {
      return schema.test('checkOutAfterCheckIn', 'Check-out date must be after the check-in date',
        function (checkoutDate) {
          if (checkinDate && checkoutDate) {
            return new Date(checkoutDate) > new Date(checkinDate);
          }
          return true;
        });
    })
    .test('is-after-checkin', 'Check-out date must be after check-in date', function (value) {
      const { checkinDate } = this.parent;
      return addDays(new Date(checkinDate), 1) <= new Date(value);
    }),
  guestCount: Yup.number()
    .typeError('Number of Guests must be a number')
    .positive('Number of Guests must be a positive number')
    .required('Number of Guests is required'),
});


function SearchBar() {

  return (
    <div className="card my-4 d-flex justify-content-end">
      <Formik
        initialValues={{
          checkinDate: '',
          checkoutDate: '',
          guestCount: '',
        }}
        validationSchema={validationSchema}
        onSubmit={(values) => {
          // Handle form submission here
          console.log(values);
        }} >
        {({ isSubmitting, setFieldValue, values  }) => (
          <Form className="card-body">
            <div className="row">
              <div className="col-md-2">
                <label htmlFor="checkinDate" className="form-label">
                  Check-In Date
                </label>
                <DatePicker
                  className="form-control"
                  selected={values.checkinDate}
                  onChange={(date) => {
                    setFieldValue('checkinDate', date);
                    setFieldValue('checkoutDate', ''); // Reset checkoutDate when checkinDate changes
                  }}
                  dateFormat="yyyy-MM-dd"
                  minDate={new Date()}
                />
                <ErrorMessage name="checkinDate" className="error" />
              </div>
              <div className="col-md-2">
                <label htmlFor="checkinTime" className="form-label">
                  Check-In Time
                </label><br />
                <label htmlFor="checkinTime" className="form-label mt-2 ml-4">10:00 AM</label>
              </div>
              <div className="col-md-2">
                <label htmlFor="checkoutDate" className="form-label">
                  Check-Out Date
                </label>
                <DatePicker
                 className="form-control"
                  selected={values.checkoutDate}
                  onChange={(date) => setFieldValue('checkoutDate', date)}
                  dateFormat="yyyy-MM-dd"
                  minDate={new Date(values.checkinDate)} // Disable dates before the selected check-in date
                />
                <ErrorMessage name="checkoutDate" component="div" className="error" />
              </div>
              <div className="col-md-2">
                <label htmlFor="checkoutTime" className="form-label">
                  Check-Out Time
                </label><br />
                <label htmlFor="checkoutTime" className="form-label">10:00 PM</label>
              </div>
              <div className="col-md-2">
                <label htmlFor="guestCount" className="form-label">
                  Number of Guests
                </label>
                <Field
                  type="number"
                  className="form-control"
                  id="guestCount" min='1' step='1'
                  name="guestCount"
                  placeholder="No of Guests"
                />
                <ErrorMessage name="guestCount" component="div" className="error" />
              </div>
              <div className="col-md-2">
                <br />
                <Link to={`/PropertyList`}
                  type="submit"
                  className="btn btn-primary btn-block"
                  disabled={isSubmitting}
                >
                  Search
                </Link>
              </div>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default SearchBar;














