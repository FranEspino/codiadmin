import React from 'react'
import { Button, Grid, Input, Container, Spacer, Text, Row, Col, Checkbox, Pagination, Modal } from '@nextui-org/react';
import { FaTrashAlt, FaPen } from "react-icons/fa";
import { BsKeyFill, BsWalletFill, BsCreditCard2FrontFill, BsCameraFill,BsFillCalendarDateFill,BsFillPhoneFill, BsGenderAmbiguous, BsFillHouseDoorFill, BsFileEarmarkFontFill, BsPersonSquare, BsPersonLinesFill } from "react-icons/bs";

const Orders = () => {
    const [visible, setVisible] = React.useState(false);
    const handler = () => setVisible(true);
    const closeHandler = () => {
        setVisible(false);
        console.log('closed');
    };
    return (
        <section className="ml-24 antialiased bg-gray-100 text-gray-600 h-screen px-4 w-screen">
            <div className="flex flex-col justify-center h-full">

                <div className="w-full max-w-5xl mx-auto bg-white shadow-lg rounded-sm border border-gray-200">
                    <header className="px-5 py-4 border-b border-gray-100 flex justify-between">
                        <h2 className="font-bold text-2xl text-gray-800">Conductores</h2>
                        <Button color="primary" auto ghost onClick={handler}>
                            Agregar
                        </Button>
                    </header>
                    <div className="p-3">
                        <div className="overflow-x-auto">
                            <table className="table-auto w-full">
                                <thead className="text-xs font-semibold uppercase text-gray-400 bg-gray-50">
                                    <tr>
                                        <th className="p-2 whitespace-nowrap">
                                            <div className="font-semibold text-left">Nombres</div>
                                        </th>
                                        <th className="p-2 whitespace-nowrap">
                                            <div className="font-semibold text-left">Teléfono</div>
                                        </th>
                                        <th className="p-2 whitespace-nowrap">
                                            <div className="font-semibold text-left">Direccióm</div>
                                        </th>
                                        <th className="p-2 whitespace-nowrap">
                                            <div className="font-semibold text-left">Cod. Vehiculo</div>
                                        </th>

                                        <th className="p-2 whitespace-nowrap">
                                            <div className="font-semibold text-center">Estado</div>
                                        </th>
                                        <th className="p-2 whitespace-nowrap">
                                            <div className="font-semibold text-center">Acción</div>
                                        </th>

                                    </tr>
                                </thead>
                                <tbody className="text-sm divide-y divide-gray-100">
                                    <tr>
                                        <td className="p-2 whitespace-nowrap">
                                            <div className="flex items-center">
                                                <div className="w-10 h-10 flex-shrink-0 mr-2 sm:mr-3"><img className="rounded-full" src="https://avatars.githubusercontent.com/u/63974005?v=4" width="40" height="40" alt="Alex Shatov" /></div>
                                                <div className="font-medium text-gray-800">Richard Francisco Espino Mostacero</div>
                                            </div>
                                        </td>
                                        <td className="p-2 whitespace-nowrap">
                                            <div className="text-left">Fran_Espino@outlook.com.pe</div>
                                        </td>
                                        <td className="p-2 whitespace-nowrap">
                                            <div className="text-left">Agusto Beleguía #420</div>
                                        </td>
                                        <td className="p-2 whitespace-nowrap">
                                            <div className=" text-center">ADSA446</div>
                                        </td>

                                        <td className="p-2 whitespace-nowrap">
                                            <div className="text-left font-medium text-green-500">Activo</div>
                                        </td>
                                        <td className="p-2 whitespace-nowrap ml-8 ">
                                            <Grid.Container gap={0.5}>
                                                <Grid>
                                                    <Button auto size="mini" color="primary" icon={<FaPen fill="white" filled />} />
                                                </Grid>
                                                <Grid>
                                                    <Button auto size="mini" color="error" icon={<FaTrashAlt fill="white" filled />} />
                                                </Grid>
                                            </Grid.Container>

                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="p-2 whitespace-nowrap">
                                            <div className="flex items-center">
                                                <div className="w-10 h-10 flex-shrink-0 mr-2 sm:mr-3"><img className="rounded-full" src="https://avatars.githubusercontent.com/u/63974005?v=4" width="40" height="40" alt="Alex Shatov" /></div>
                                                <div className="font-medium text-gray-800">Richard Francisco Espino Mostacero</div>
                                            </div>
                                        </td>
                                        <td className="p-2 whitespace-nowrap">
                                            <div className="text-left">Fran_Espino@outlook.com.pe</div>
                                        </td>
                                        <td className="p-2 whitespace-nowrap">
                                            <div className="text-left">Agusto Beleguía #420</div>
                                        </td>
                                        <td className="p-2 whitespace-nowrap">
                                            <div className=" text-center">ADSA446</div>
                                        </td>

                                        <td className="p-2 whitespace-nowrap">
                                            <div className="text-left font-medium text-green-500">Activo</div>
                                        </td>
                                        <td className="p-2 whitespace-nowrap ml-8 ">
                                            <Grid.Container gap={0.5}>
                                                <Grid>
                                                    <Button auto size="mini" color="primary" icon={<FaPen fill="white" filled />} />
                                                </Grid>
                                                <Grid>
                                                    <Button auto size="mini" color="error" icon={<FaTrashAlt fill="white" filled />} />
                                                </Grid>
                                            </Grid.Container>

                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="p-2 whitespace-nowrap">
                                            <div className="flex items-center">
                                                <div className="w-10 h-10 flex-shrink-0 mr-2 sm:mr-3"><img className="rounded-full" src="https://avatars.githubusercontent.com/u/63974005?v=4" width="40" height="40" alt="Alex Shatov" /></div>
                                                <div className="font-medium text-gray-800">Richard Francisco Espino Mostacero</div>
                                            </div>
                                        </td>
                                        <td className="p-2 whitespace-nowrap">
                                            <div className="text-left">Fran_Espino@outlook.com.pe</div>
                                        </td>
                                        <td className="p-2 whitespace-nowrap">
                                            <div className="text-left">Agusto Beleguía #420</div>
                                        </td>
                                        <td className="p-2 whitespace-nowrap">
                                            <div className=" text-center">ADSA446</div>
                                        </td>

                                        <td className="p-2 whitespace-nowrap">
                                            <div className="text-left font-medium text-green-500">Activo</div>
                                        </td>
                                        <td className="p-2 whitespace-nowrap ml-8 ">
                                            <Grid.Container gap={0.5}>
                                                <Grid>
                                                    <Button auto size="mini" color="primary" icon={<FaPen fill="white" filled />} />
                                                </Grid>
                                                <Grid>
                                                    <Button auto size="mini" color="error" icon={<FaTrashAlt fill="white" filled />} />
                                                </Grid>
                                            </Grid.Container>

                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="p-2 whitespace-nowrap">
                                            <div className="flex items-center">
                                                <div className="w-10 h-10 flex-shrink-0 mr-2 sm:mr-3"><img className="rounded-full" src="https://avatars.githubusercontent.com/u/63974005?v=4" width="40" height="40" alt="Alex Shatov" /></div>
                                                <div className="font-medium text-gray-800">Richard Francisco Espino Mostacero</div>
                                            </div>
                                        </td>
                                        <td className="p-2 whitespace-nowrap">
                                            <div className="text-left">Fran_Espino@outlook.com.pe</div>
                                        </td>
                                        <td className="p-2 whitespace-nowrap">
                                            <div className="text-left">Agusto Beleguía #420</div>
                                        </td>
                                        <td className="p-2 whitespace-nowrap">
                                            <div className=" text-center">ADSA446</div>
                                        </td>

                                        <td className="p-2 whitespace-nowrap">
                                            <div className="text-left font-medium text-green-500">Activo</div>
                                        </td>
                                        <td className="p-2 whitespace-nowrap ml-8 ">
                                            <Grid.Container gap={0.5}>
                                                <Grid>
                                                    <Button auto size="mini" color="primary" icon={<FaPen fill="white" filled />} />
                                                </Grid>
                                                <Grid>
                                                    <Button auto size="mini" color="error" icon={<FaTrashAlt fill="white" filled />} />
                                                </Grid>
                                            </Grid.Container>

                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="p-2 whitespace-nowrap">
                                            <div className="flex items-center">
                                                <div className="w-10 h-10 flex-shrink-0 mr-2 sm:mr-3"><img className="rounded-full" src="https://avatars.githubusercontent.com/u/63974005?v=4" width="40" height="40" alt="Alex Shatov" /></div>
                                                <div className="font-medium text-gray-800">Richard Francisco Espino Mostacero</div>
                                            </div>
                                        </td>
                                        <td className="p-2 whitespace-nowrap">
                                            <div className="text-left">Fran_Espino@outlook.com.pe</div>
                                        </td>
                                        <td className="p-2 whitespace-nowrap">
                                            <div className="text-left">Agusto Beleguía #420</div>
                                        </td>
                                        <td className="p-2 whitespace-nowrap">
                                            <div className=" text-center">ADSA446</div>
                                        </td>

                                        <td className="p-2 whitespace-nowrap">
                                            <div className="text-left font-medium text-green-500">Activo</div>
                                        </td>
                                        <td className="p-2 whitespace-nowrap ml-8 ">
                                            <Grid.Container gap={0.5}>
                                                <Grid>
                                                    <Button auto size="mini" color="primary" icon={<FaPen fill="white" filled />} />
                                                </Grid>
                                                <Grid>
                                                    <Button auto size="mini" color="error" icon={<FaTrashAlt fill="white" filled />} />
                                                </Grid>
                                            </Grid.Container>

                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="p-2 whitespace-nowrap">
                                            <div className="flex items-center">
                                                <div className="w-10 h-10 flex-shrink-0 mr-2 sm:mr-3"><img className="rounded-full" src="https://avatars.githubusercontent.com/u/63974005?v=4" width="40" height="40" alt="Alex Shatov" /></div>
                                                <div className="font-medium text-gray-800">Richard Francisco Espino Mostacero</div>
                                            </div>
                                        </td>
                                        <td className="p-2 whitespace-nowrap">
                                            <div className="text-left">Fran_Espino@outlook.com.pe</div>
                                        </td>
                                        <td className="p-2 whitespace-nowrap">
                                            <div className="text-left">Agusto Beleguía #420</div>
                                        </td>
                                        <td className="p-2 whitespace-nowrap">
                                            <div className=" text-center">ADSA446</div>
                                        </td>

                                        <td className="p-2 whitespace-nowrap">
                                            <div className="text-left font-medium text-green-500">Activo</div>
                                        </td>
                                        <td className="p-2 whitespace-nowrap ml-8 ">
                                            <Grid.Container gap={0.5}>
                                                <Grid>
                                                    <Button auto size="mini" color="primary" icon={<FaPen fill="white" filled />} />
                                                </Grid>
                                                <Grid>
                                                    <Button auto size="mini" color="error" icon={<FaTrashAlt fill="white" filled />} />
                                                </Grid>
                                            </Grid.Container>

                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="p-2 whitespace-nowrap">
                                            <div className="flex items-center">
                                                <div className="w-10 h-10 flex-shrink-0 mr-2 sm:mr-3"><img className="rounded-full" src="https://avatars.githubusercontent.com/u/63974005?v=4" width="40" height="40" alt="Alex Shatov" /></div>
                                                <div className="font-medium text-gray-800">Richard Francisco Espino Mostacero</div>
                                            </div>
                                        </td>
                                        <td className="p-2 whitespace-nowrap">
                                            <div className="text-left">Fran_Espino@outlook.com.pe</div>
                                        </td>
                                        <td className="p-2 whitespace-nowrap">
                                            <div className="text-left">Agusto Beleguía #420</div>
                                        </td>
                                        <td className="p-2 whitespace-nowrap">
                                            <div className=" text-center">ADSA446</div>
                                        </td>

                                        <td className="p-2 whitespace-nowrap">
                                            <div className="text-left font-medium text-green-500">Activo</div>
                                        </td>
                                        <td className="p-2 whitespace-nowrap ml-8 ">
                                            <Grid.Container gap={0.5}>
                                                <Grid>
                                                    <Button auto size="mini" color="primary" icon={<FaPen fill="white" filled />} />
                                                </Grid>
                                                <Grid>
                                                    <Button auto size="mini" color="error" icon={<FaTrashAlt fill="white" filled />} />
                                                </Grid>
                                            </Grid.Container>

                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="p-2 whitespace-nowrap">
                                            <div className="flex items-center">
                                                <div className="w-10 h-10 flex-shrink-0 mr-2 sm:mr-3"><img className="rounded-full" src="https://avatars.githubusercontent.com/u/63974005?v=4" width="40" height="40" alt="Alex Shatov" /></div>
                                                <div className="font-medium text-gray-800">Richard Francisco Espino Mostacero</div>
                                            </div>
                                        </td>
                                        <td className="p-2 whitespace-nowrap">
                                            <div className="text-left">Fran_Espino@outlook.com.pe</div>
                                        </td>
                                        <td className="p-2 whitespace-nowrap">
                                            <div className="text-left">Agusto Beleguía #420</div>
                                        </td>
                                        <td className="p-2 whitespace-nowrap">
                                            <div className=" text-center">ADSA446</div>
                                        </td>

                                        <td className="p-2 whitespace-nowrap">
                                            <div className="text-left font-medium text-green-500">Activo</div>
                                        </td>
                                        <td className="p-2 whitespace-nowrap ml-8 ">
                                            <Grid.Container gap={0.5}>
                                                <Grid>
                                                    <Button auto size="mini" color="primary" icon={<FaPen fill="white" filled />} />
                                                </Grid>
                                                <Grid>
                                                    <Button auto size="mini" color="error" icon={<FaTrashAlt fill="white" filled />} />
                                                </Grid>
                                            </Grid.Container>

                                        </td>
                                    </tr>




                                </tbody>
                            </table>
                        </div>
                        <div className="flex justify-center align-center">

                            <Pagination total={5} initialPage={1} />
                        </div>
                    </div>
                </div>
            </div>
            <div>

                <Modal
                    width="600px"

                    closeButton
                    aria-labelledby="modal-title"
                    open={visible}
                    onClose={closeHandler}
                >
                    <Modal.Header>
                        <Text id="modal-title" weight="bold" size={18}>
                            Nuevo Conductor
                        </Text>
                    </Modal.Header>
                    <Modal.Body>
                        <Container gap={0}>
                            <Spacer y={1} />
                            <Row gap={0.5}>
                                <Col>

                                    <Input
                                        clearable
                                        bordered
                                        fullWidth
                                        color="primary"
                                        size="large"
                                        placeholder="Nombres"
                                        contentLeft={<BsPersonSquare />}
                                    />
                                    <Spacer y={1} />

                                    <Input
                                        clearable
                                        bordered
                                        fullWidth
                                        color="primary"
                                        size="large"
                                        placeholder="Apellidos"
                                        contentLeft={<BsPersonLinesFill />}
                                    />


                                    <Spacer y={1} />

                                    <Input
                                        clearable
                                        bordered
                                        fullWidth
                                        color="primary"
                                        size="large"
                                        placeholder="Dni"
                                        contentLeft={<BsCreditCard2FrontFill />}
                                    />
                                    <Spacer y={1} />


                                    <Input
                                        clearable
                                        bordered
                                        fullWidth
                                        color="primary"
                                        size="large"
                                        placeholder="Edad"
                                        contentLeft={<BsFileEarmarkFontFill />}
                                    />
                                    <Spacer y={1} />

                                    <Input
                                        clearable
                                        bordered
                                        fullWidth
                                        color="primary"
                                        size="large"
                                        placeholder="Email"
                                        contentLeft={<BsWalletFill />}
                                    />
                                    <Spacer y={1} />
                                </Col>

                                <Col>
                                    <Input
                                        clearable
                                        bordered
                                        fullWidth
                                        color="primary"
                                        size="large"
                                        placeholder="Dirección"
                                        contentLeft={<BsFillHouseDoorFill />}
                                    />
                                    <Spacer y={1} />
                                    <Input
                                        clearable
                                        bordered
                                        fullWidth
                                        color="primary"
                                        size="large"
                                        placeholder="Telefóno"
                                        contentLeft={<BsFillPhoneFill />}
                                    />
                                    <Spacer y={1} />
                                    <Input
                                        clearable
                                        bordered
                                        fullWidth
                                        color="primary"
                                        size="large"
                                        placeholder="Sexo"
                                        contentLeft={<BsGenderAmbiguous />}
                                    />
                                    <Spacer y={1} />

                                    <Input
                                    type="date"
    
                                        bordered
                                        fullWidth
                                        color="primary"
                                        size="large"
                                        placeholder="Fecha de nacimiento"
                                       
                                    />
                                    <Spacer y={1} />

                                <Input
                                        style={{"display":"none",cursor:"pointer"}}
                                        type="file"
                                        size="large"

                                        fullWidth
                                        shadow={true} 
                                        labelPlaceholder="Click para subir una foto" status="primary" 
                                     
                                        contentLeft={<BsCameraFill />}

                                    >



                                    </Input>

                                </Col>
                            </Row>
                        </Container>









                    </Modal.Body>
                    <Modal.Footer>
                        <Button auto flat color="error" onClick={closeHandler}>
                            Cancelar
                        </Button>
                        <Button auto onClick={closeHandler}>
                            Siguiente
                        </Button>
                    </Modal.Footer>
                </Modal>
            </div>
        </section>

    )
}

export default Orders
