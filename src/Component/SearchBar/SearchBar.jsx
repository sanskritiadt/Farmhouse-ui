import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import './SearchBar.css';
import { Link } from 'react-router-dom';

const validationSchema = Yup.object().shape({
  checkinDate: Yup.date().required('Check-In Date is required')
    .test('checkInBeforeCheckout', 'Check-in date must be before the check-out date',
      function (checkinDate) {
        const { checkoutDate } = this.parent;
        if (checkinDate && checkoutDate) {
          return new Date(checkinDate) < new Date(checkoutDate);
        }
        return true;
      }),
  checkoutDate: Yup.date().required('Check-Out Date is required')
    .test('checkInBeforeCheckout', 'Check-out date must be after the check-in date',
      function (checkoutDate) {
        const { checkinDate } = this.parent;
        if (checkinDate && checkoutDate) {
          return new Date(checkoutDate) > new Date(checkinDate);
        } return true;
      }),
  guestCount: Yup.number()
    .typeError('Number of Guests must be a number')
    .positive('Number of Guests must be a positive number')
    .required('Number of Guests is required'),
});



function SearchBar() {
  const currentDate = new Date().toISOString().split('T')[0];

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
        }}
      >
        {({ isSubmitting }) => (
          <Form className="card-body">
            <div className="row">
              <div className="col-md-2">
                <label htmlFor="checkinDate" className="form-label">
                  Check-In Date
                </label>
                <Field
                  type="date"
                  className="form-control"
                  id="checkinDate"
                  name="checkinDate"
                  min={currentDate}
                />
                <ErrorMessage name="checkinDate" component="div" className="error" />
              </div>
              <div className="col-md-2">
                <label htmlFor="checkinTime" className="form-label">
                  Check-In Time
                </label><br />
                <label htmlFor="checkinTime" className="form-label mt-2">10:00 AM</label>
              </div>
              <div className="col-md-2">
                <label htmlFor="checkoutDate" className="form-label">
                  Check-Out Date
                </label>
                <Field
                  type="date"
                  className="form-control"
                  id="checkoutDate"
                  name="checkoutDate"
                  min={currentDate}
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














