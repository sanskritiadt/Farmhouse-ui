import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useParams } from 'react-router-dom';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { fetchSingleProperty } from '../../utils/api'
import * as Yup from 'yup';
import DatePicker from 'react-datepicker';

export default function PricingForm() {
  const { id } = useParams();
  const [Villa, setVilla] = useState({});
  const currentDate = new Date().toISOString().split('T')[0];

  useEffect(() => {
    async function fetchData() {
      try {
        const singleProperty = await fetchSingleProperty(id);
        setVilla(singleProperty);
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, [id]);

  function submit(values, actions) {
    axios
      .post(`/alpha-homes/booking/createBooking`, {
        email: values.email,
        propertyId: Villa.propertyId,
        checkInDate: values.checkInDate,
        checkOutDate: values.checkOutDate,
        guestNo: parseInt(values.guestNo),
        totalPrice: Villa.price,
      })
      .then((response) => {
        console.log(response.data);
        toast.success(response.data, { position: 'top-center', theme: 'colored' });
      })
      .catch((error) => {
        console.log(error);
        toast.error('Error occurred, try again later.', {
          position: 'top-center',
          theme: 'colored',
        });
      })
      .finally(() => {
        actions.setSubmitting(false);
      });
  }

  // const validationSchema = Yup.object().shape({
  //   email: Yup.string()
  //     .email('Invalid email address')
  //     .required('Email is required'),
  //   checkInDate: Yup.date()
  //     .required('Check-in date is required.')
  //     .test('checkInBeforeCheckOut', 'Check-in date must be before the check-out date',
  //       function (checkInDate) {
  //         // `this.parent` refers to the entire form values.
  //         const { checkOutDate } = this.parent;
  //         if (checkInDate && checkOutDate) {
  //           return new Date(checkInDate) < new Date(checkOutDate);
  //         }
  //         return true; // If either date is missing, assume it's valid.
  //       }),
  //   checkOutDate: Yup.date()
  //     .required('Check-out date is required.')
  //     .test('checkInBeforeCheckOut', 'Check-out date must be after the check-in date',
  //       function (checkOutDate) {
  //         // `this.parent` refers to the entire form values.
  //         const { checkInDate } = this.parent;
  //         if (checkInDate && checkOutDate) {
  //           return new Date(checkOutDate) > new Date(checkInDate);
  //         }
  //         return true; // If either date is missing, assume it's valid.
  //       }),
  //   guestNo: Yup.number()
  //     .typeError('Number of Guests must be a number')
  //     .positive('Number of Guests must be a positive number')
  //     .required('Number of Guests is required'),
  //   termsAndConditions: Yup.boolean().oneOf([true], 'You must agree to the terms and conditions'),
  // });
  
  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .email('Invalid email address')
      .required('Email is required'),
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
      }),
    guestNo: Yup.number()
      .typeError('Number of Guests must be a number')
      .positive('Number of Guests must be a positive number')
      .required('Number of Guests is required'),
    termsAndConditions: Yup.boolean().oneOf([true], 'You must agree to the terms and conditions'),
  });

  return (
    <div className="productDetail-card col-lg-4 col-md-5 margin-top-25">
      {/* Display Villa information here */}
      <i className="fa fa-inr" aria-hidden="true"></i>
      <span className="property-discount payable_amt" style={{ fontWeight: 'bolder', fontSize: '18px' }}>
        {Villa.price}.00/-
      </span>
      <span style={{ fontSize: '12px' }}>&nbsp; &nbsp;(Inclusive of all charges)</span>
      <hr className="m-t-sm m-b-lg" />

      <Formik
        initialValues={{
          email: '',
          checkinDate: '',
          checkoutDate: '',
          guestNo: '',
          termsAndConditions: false,
        }}
        validationSchema={validationSchema}
        onSubmit={submit}
      >
        {({ isSubmitting, setFieldValue, values }) => (
          <Form>
            <div className="with-forms margin-top-0">
              <div className="row with-forms">
                <div className="col-md-12">
                  <div className="form-group">
                    <div className="input-group date" id="datetimepicker6">
                      <label htmlFor="checkInDate" className="col-md-4 col-form-label">
                        Check-In:
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
                    </div>
                    <ErrorMessage name="checkInDate" component="div" className="error" />
                  </div>
                </div>
                <div className="col-md-12 mt-3">
                  <div className="form-group">
                    <div className="input-group date" id="datetimepicker7">
                      <label htmlFor="checkOutDate" className="col-md-4 col-form-label">
                        Check-Out:
                      </label>
                      <DatePicker
                        className="form-control"
                        selected={values.checkoutDate}
                        onChange={(date) => setFieldValue('checkoutDate', date)}
                        dateFormat="yyyy-MM-dd"
                        minDate={new Date(values.checkinDate)} // Disable dates before the selected check-in date
                      />
                    </div>
                    <ErrorMessage name="checkOutDate" component="div" className="error" />
                  </div>
                </div>
                <div className="col-md-12 mt-3">
                  <div className="form-group">
                    <div className="input-group date" id="datetimepicker7">
                      <label htmlFor="guestNo" className="col-md-4 col-form-label">
                        No. of Guest:
                      </label>
                      <Field type="number" name="guestNo" min='1' step='1' className="form-control" />
                    </div>
                    <ErrorMessage name="guestNo" component="div" className="error" />
                  </div>
                </div>
                <div className="col-md-12 mt-3">
                  <div className="form-group">
                    <div className="input-group date" id="datetimepicker7">
                      <label htmlFor="email" className="col-md-4 col-form-label">
                        Email:
                      </label>
                      <Field type="email" name="email" className="form-control" />
                    </div>
                    <ErrorMessage name="email" component="div" className="error" />
                  </div>
                </div>
              </div>
              <div className="row with-forms m-t-xl mb-3">
                <div className="col-lg-12 col-md-12 form-group">
                  <div className="checkboxes">
                    <Field type="checkbox" name="termsAndConditions" className="form-check-input" />
                    <label style={{ marginLeft: '10px' }}>
                      I agree to Farmhouse Terms &amp; Conditions
                    </label>
                  </div>
                  <ErrorMessage name="termsAndConditions" component="div" className="error" />
                </div>
              </div>
            </div>
            <div className="d-grid gap-2 col-4 mx-auto btn-group btn-group-sm">
              <button
                className="btn btn-outline-success"
                type="submit"
                disabled={isSubmitting}
              >
                Book now
              </button>
            </div>
          </Form>
        )}
      </Formik>

    </div>
  );
}

