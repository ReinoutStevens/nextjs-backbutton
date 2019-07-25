import React from 'react'
import { NextPageContext } from 'next';


interface TestPageProps {
    slug: string;
}


class IframeTest extends React.Component<TestPageProps> {

    static async getInitialProps(context: NextPageContext): Promise<TestPageProps> {
        const slug = context.query.slug as string;
        return {
            slug: slug,
        };
    }

    constructor(props: TestPageProps) {
        super(props);
        this.state = {
            mounted: false,
        }
    }

    componentDidMount() {
        this.setState({
            mounted: true,
        });
    }

    render() {
        const { slug } = this.props;
        return (
            <>
                <div>
                    We got slug {slug}
                </div>
            </>
        );
    }
}

export default IframeTest;