import { FC } from 'react';
import { useHistory } from 'react-router-dom';
import { AddIcon, ArrowLeftIcon, Button, FormField, Heading, Label, RemoveIcon, Text, Textarea, TextInput, TrashIcon } from 'evergreen-ui';
import VBox from '../../helpers/VBox';
import HBox from '../../helpers/HBox';
import './Invoice.scss';

const Invoice: FC = () => {
  const history = useHistory();

  return (
    <div className="Invoice">
      <Heading size={800} marginBottom={20}>
        <Button appearance="minimal" onClick={() => history.goBack()} size="large" paddingX={5} marginRight={10}>
          <HBox>
            <ArrowLeftIcon marginRight={5} />
            Back
          </HBox>
        </Button>
        New Invoice
      </Heading>

      <VBox border borderRadius={5} padding={20} marginBottom={20}>
        <HBox justifyContent="space-between" alignItems="start" marginBottom={10}>
          <VBox alignItems="start">
            <img src="https://via.placeholder.com/200x130.png?text=Your+Company+Logo" alt="YOUR LOGO" style={{ maxWidth: 200, maxHeight: 130, width: '100%', height: '100%' }} />
          </VBox>

          <VBox alignItems="end">
            <Heading size={900} marginBottom={10}>INVOICE #</Heading>
            <TextInput
              placeholder="Invoice Number"
              placeContent="center"
              prefix="#"
              maxWidth={170}
              required
            />
          </VBox>
        </HBox>

        <HBox justifyContent="space-between" alignItems="start" marginBottom={10}>
          <VBox alignContent="start" justifyContent="start" width="100%">
            <Textarea name="textarea-1" placeholder="Who is this invoice from?" resize="none" />

            <HBox width="100%" marginTop={10}>
              <FormField label="Bill To" width="100%" marginRight={5}>
                <Textarea name="textarea-1" placeholder="Bill To" resize="none" />
              </FormField>

              <FormField label="Ship To" width="100%" marginLeft={5}>
                <Textarea name="textarea-1" placeholder="Ship To" resize="none" />
              </FormField>
            </HBox>
          </VBox>

          <VBox alignItems="end" justifyContent="start" width="100%">
            <HBox justifyContent="end" marginBottom={10}>
              <Label>Date</Label>
              <TextInput type="date" marginLeft={10} width="100%" maxWidth={150} />
            </HBox>

            <HBox justifyContent="end" marginBottom={10}>
              <Label>Payment Terms</Label>
              <TextInput marginLeft={10} width="100%" maxWidth={150} />
            </HBox>

            <HBox justifyContent="end" marginBottom={10}>
              <Label>Due Date</Label>
              <TextInput type="date" marginLeft={10} width="100%" maxWidth={150} />
            </HBox>

            <HBox justifyContent="end" marginBottom={10}>
              <Label>Purcharse Order</Label>
              <TextInput marginLeft={10} width="100%" maxWidth={150} />
            </HBox>
          </VBox>
        </HBox>

        <VBox alignItems="start" marginBottom={15}>
          <table className="xtable" style={{ marginBottom: 5 }}>
            <thead>
              <tr>
                <th>Item</th>
                <th>Quantity</th>
                <th>Rate</th>
                <th>Amount</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>
                  <HBox>
                    <Button appearance="primary" intent="danger" paddingX={0} title="Remove Item"
                      borderTopRightRadius={0} borderBottomRightRadius={0}>
                      <TrashIcon />
                    </Button>
                    <TextInput width="100%" placeholder="Item" borderTopLeftRadius={0}
                      borderBottomLeftRadius={0} />
                  </HBox>
                </td>
                <td>
                  <TextInput width="100%" placeholder="Quantity" textAlign="center" />
                </td>
                <td>
                  <TextInput width="100%" placeholder="Rate" textAlign="center" />
                </td>
                <td>
                  <TextInput width="100%" placeholder="Amount" textAlign="right" />
                </td>
              </tr>
              <tr>
                <td>
                  <HBox>
                    <Button appearance="primary" intent="danger" paddingX={0} title="Remove Item"
                      borderTopRightRadius={0} borderBottomRightRadius={0}>
                      <TrashIcon />
                    </Button>
                    <TextInput width="100%" placeholder="Item" borderTopLeftRadius={0}
                      borderBottomLeftRadius={0} />
                  </HBox>
                </td>
                <td>
                  <TextInput width="100%" placeholder="Quantity" textAlign="center" />
                </td>
                <td>
                  <TextInput width="100%" placeholder="Rate" textAlign="center" />
                </td>
                <td>
                  <TextInput width="100%" placeholder="Amount" textAlign="right" />
                </td>
              </tr>
            </tbody>
          </table>

          <Button appearance="primary" intent="success">
            <AddIcon marginRight={5} />
            Add Item
          </Button>
        </VBox>

        <HBox justifyContent="space-between" alignItems="start" marginBottom={10}>
          <VBox alignContent="start" justifyContent="start">
            <FormField label="Notes" width="100%" marginLeft={5}>
              <Textarea name="textarea-1" placeholder="Ship To" resize="none" />
            </FormField>

            <FormField label="Terms" width="100%" marginLeft={5}>
              <Textarea name="textarea-1" placeholder="Ship To" resize="none" />
            </FormField>
          </VBox>

          <VBox>
            <HBox justifyContent="end" marginBottom={10}>
              <Label>Subtotal</Label>
              <Text marginLeft={10} width="100%" maxWidth={150} textAlign="right" size={500}>$800</Text>
            </HBox>

            <HBox justifyContent="end" marginBottom={10}>
              <Button marginRight={16} appearance="minimal" intent="danger" paddingX={0} title="Remove Discount">
                <RemoveIcon />
              </Button>
              <Label width="100%" maxWidth={60} textAlign="right">Discount</Label>
              <TextInput type="number" marginLeft={10} width="100%" maxWidth={150} />
            </HBox>

            <HBox justifyContent="end" marginBottom={10}>
              <Button marginRight={16} appearance="minimal" intent="danger" paddingX={0} title="Remove Discount">
                <RemoveIcon />
              </Button>
              <Label width="100%" maxWidth={60} textAlign="right">Tax</Label>
              <TextInput type="number" marginLeft={10} width="100%" maxWidth={150} />
            </HBox>

            <HBox justifyContent="end" marginBottom={10}>
              <Button marginRight={16} appearance="minimal" intent="danger" paddingX={0} title="Remove Discount">
                <RemoveIcon />
              </Button>
              <Label width="100%" maxWidth={60} textAlign="right">Shipping</Label>
              <TextInput type="number" marginLeft={10} width="100%" maxWidth={150} />
            </HBox>

            <HBox justifyContent="end" marginBottom={10}>
              <Label>Total</Label>
              <Text marginLeft={10} width="100%" maxWidth={150} textAlign="right" size={500}>$800</Text>
            </HBox>

            <HBox justifyContent="end" marginBottom={10}>
              <Label>Amount Paid</Label>
              <TextInput type="number" marginLeft={10} width="100%" maxWidth={150} />
            </HBox>

            <HBox justifyContent="end" marginBottom={10}>
              <Label>Balance Due</Label>
              <Text marginLeft={10} width="100%" maxWidth={150} textAlign="right" size={500}>$800</Text>
            </HBox>
          </VBox>
        </HBox>
      </VBox>
    </div>
  );
};

export default Invoice;
